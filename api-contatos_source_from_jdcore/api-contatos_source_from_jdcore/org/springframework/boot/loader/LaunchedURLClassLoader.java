package org.springframework.boot.loader;

import java.io.IOException;
import java.net.JarURLConnection;
import java.net.URL;
import java.net.URLClassLoader;
import java.net.URLConnection;
import java.security.AccessController;
import java.security.PrivilegedActionException;
import java.security.PrivilegedExceptionAction;
import java.util.Enumeration;
import org.springframework.boot.loader.jar.Handler;
import org.springframework.lang.UsesJava7;
































public class LaunchedURLClassLoader
  extends URLClassLoader
{
  public LaunchedURLClassLoader(URL[] urls, ClassLoader parent)
  {
    super(urls, parent);
  }
  
  public URL findResource(String name)
  {
    Handler.setUseFastConnectionExceptions(true);
    try {
      return super.findResource(name);
    }
    finally {
      Handler.setUseFastConnectionExceptions(false);
    }
  }
  
  public Enumeration<URL> findResources(String name) throws IOException
  {
    Handler.setUseFastConnectionExceptions(true);
    try {
      return super.findResources(name);
    }
    finally {
      Handler.setUseFastConnectionExceptions(false);
    }
  }
  
  protected Class<?> loadClass(String name, boolean resolve)
    throws ClassNotFoundException
  {
    Handler.setUseFastConnectionExceptions(true);
    try {
      try {
        definePackageIfNecessary(name);
      }
      catch (IllegalArgumentException ex)
      {
        if (getPackage(name) == null)
        {


          throw new AssertionError("Package " + name + " has already been defined but it could not be found");
        }
      }
      
      return super.loadClass(name, resolve);
    }
    finally {
      Handler.setUseFastConnectionExceptions(false);
    }
  }
  





  private void definePackageIfNecessary(String className)
  {
    int lastDot = className.lastIndexOf('.');
    if (lastDot >= 0) {
      String packageName = className.substring(0, lastDot);
      if (getPackage(packageName) == null) {
        try {
          definePackage(className, packageName);
        }
        catch (IllegalArgumentException ex)
        {
          if (getPackage(packageName) == null)
          {


            throw new AssertionError("Package " + packageName + " has already been defined but it could not be found");
          }
        }
      }
    }
  }
  
  private void definePackage(final String className, final String packageName)
  {
    try
    {
      AccessController.doPrivileged(new PrivilegedExceptionAction()
      {
        public Object run() throws ClassNotFoundException {
          String packageEntryName = packageName.replace('.', '/') + "/";
          String classEntryName = className.replace('.', '/') + ".class";
          for (URL url : getURLs()) {
            try {
              URLConnection connection = url.openConnection();
              if ((connection instanceof JarURLConnection))
              {
                java.util.jar.JarFile jarFile = ((JarURLConnection)connection).getJarFile();
                if ((jarFile.getEntry(classEntryName) != null) && 
                  (jarFile.getEntry(packageEntryName) != null) && 
                  (jarFile.getManifest() != null)) {
                  definePackage(packageName, jarFile.getManifest(), url);
                  
                  return null;
                }
              }
            }
            catch (IOException localIOException) {}
          }
          

          return null;
        }
      }, AccessController.getContext());
    }
    catch (PrivilegedActionException localPrivilegedActionException) {}
  }
  




  public void clearCache()
  {
    for (URL url : getURLs()) {
      try {
        URLConnection connection = url.openConnection();
        if ((connection instanceof JarURLConnection)) {
          clearCache(connection);
        }
      }
      catch (IOException localIOException) {}
    }
  }
  

  private void clearCache(URLConnection connection)
    throws IOException
  {
    Object jarFile = ((JarURLConnection)connection).getJarFile();
    if ((jarFile instanceof org.springframework.boot.loader.jar.JarFile)) {
      ((org.springframework.boot.loader.jar.JarFile)jarFile).clearCache();
    }
  }
  
  @UsesJava7
  private static void performParallelCapableRegistration() {
    try {
      ClassLoader.registerAsParallelCapable();
    }
    catch (NoSuchMethodError localNoSuchMethodError) {}
  }
  
  static {}
}
