package com.angularTeste.angularTeste;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AngularTesteController {
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
}
