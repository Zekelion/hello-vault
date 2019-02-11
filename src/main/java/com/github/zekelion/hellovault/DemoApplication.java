package com.github.zekelion.hellovault;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

	@Value("${foo}")
	private String foo;

	@GetMapping("/")
	public String getFoo() {
		return foo;
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}

