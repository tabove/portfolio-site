package com.example.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //APIのエンドポイントアノテーション
@RequestMapping("/api") //このコントローラーのベースURL
public class HelloController {

	@GetMapping("/hello") // /api/helloにGETリクエストが来た際に呼ばれる
	public String hello() {
		return "Hello from Spring Boot!";
	}
}
