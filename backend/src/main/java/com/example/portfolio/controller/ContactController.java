package com.example.portfolio.controller;

import com.example.portfolio.dto.ContactForm;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @PostMapping("/contact")
    public String submitContact(@RequestBody ContactForm form) {
        // Simulating processing logic (e.g., saving to DB or sending email)
        System.out.println("Received contact form submission:");
        System.out.println("Name: " + form.getName());
        System.out.println("Email: " + form.getEmail());
        System.out.println("Message: " + form.getMessage());
        
        return "Message received successfully!";
    }
}
