package com.algaworks.contatos.resource;

import com.algaworks.contatos.model.Contato;
import com.algaworks.contatos.repository.Contatos;
import javax.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.HeadersBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/contatos"})
@CrossOrigin({"*"})
public class ContatosResource
{
  @Autowired
  private Contatos contatos;
  
  public ContatosResource() {}
  
  @PostMapping
  public Contato adicionar(@Valid @RequestBody Contato contato)
  {
    return (Contato)contatos.save(contato);
  }
  
  @GetMapping
  public java.util.List<Contato> listar() {
    return contatos.findAll();
  }
  
  @GetMapping({"/{id}"})
  public ResponseEntity<Contato> buscar(@PathVariable Long id) {
    Contato contato = (Contato)contatos.findOne(id);
    
    if (contato == null) {
      return ResponseEntity.notFound().build();
    }
    
    return ResponseEntity.ok(contato);
  }
  
  @PutMapping({"/{id}"})
  public ResponseEntity<Contato> atualizar(@PathVariable Long id, @Valid @RequestBody Contato contato)
  {
    Contato existente = (Contato)contatos.findOne(id);
    
    if (existente == null) {
      return ResponseEntity.notFound().build();
    }
    
    BeanUtils.copyProperties(contato, existente, new String[] { "id" });
    
    existente = (Contato)contatos.save(existente);
    
    return ResponseEntity.ok(existente);
  }
  
  @DeleteMapping({"/{id}"})
  public ResponseEntity<Void> remover(@PathVariable Long id) {
    Contato contato = (Contato)contatos.findOne(id);
    
    if (contato == null) {
      return ResponseEntity.notFound().build();
    }
    
    contatos.delete(contato);
    
    return ResponseEntity.noContent().build();
  }
}
