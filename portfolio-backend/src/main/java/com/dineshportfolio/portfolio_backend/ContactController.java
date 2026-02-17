package com.dineshportfolio.portfolio_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5175"}) 
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String sendContactEmail(@RequestBody ContactRequest request) {
        String fullMessage = "New message from Portfolio:\n\n" +
                             "Name: " + request.getName() + "\n" +
                             "Email: " + request.getEmail() + "\n" +
                             "Subject: " + request.getSubject() + "\n\n" +
                             "Message:\n" + request.getMessage();

        emailService.sendEmail(request.getEmail(), request.getSubject(), fullMessage);
        return "Email sent successfully!";
    }
}

class ContactRequest {
    private String name;
    private String email;
    private String subject;
    private String message;

    public ContactRequest() {} // Default constructor is required

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
