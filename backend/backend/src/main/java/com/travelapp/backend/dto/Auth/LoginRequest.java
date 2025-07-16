package com.travelapp.backend.dto.Auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
