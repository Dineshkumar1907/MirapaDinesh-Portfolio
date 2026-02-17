package com.dineshportfolio.portfolio_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String userEmail, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("mirapadinesh07@gmail.com"); 
        message.setTo("mirapadinesh07@gmail.com"); 
        message.setReplyTo(userEmail); 
        message.setSubject("Portfolio: " + subject);
        message.setText(body);
        
        mailSender.send(message);
    }
}
