package com.travelapp.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private String id;

    private String username;
    private String email;
    private String password;

    private String role = "USER"; // "USER" or "ADMIN"
    private boolean isApproved = false;

    // ✅ Custom constructor for register flow (without ID)
    public User(String username, String email, String password, String role, boolean isApproved) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isApproved = isApproved;
    }
}
