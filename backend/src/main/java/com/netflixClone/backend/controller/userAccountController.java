package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.userAccount;
import com.netflixClone.backend.service.userAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class userAccountController {
    @Autowired
    private userAccountService userAccountService;

    @PostMapping("/api/register")
    public ResponseEntity<userAccount> userRegister(@RequestBody userAccount newUser){
        return new ResponseEntity<userAccount>(userAccountService.userRegister(newUser), HttpStatus.CREATED);
    }

    @GetMapping("/api/login/{email}")
    public userAccount userLogin(@PathVariable String email){
        return userAccountService.userLogin(email);
    }
}
