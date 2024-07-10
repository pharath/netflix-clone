package com.netflixClone.backend.service;

import com.netflixClone.backend.model.userAccount;
import org.springframework.stereotype.Service;


public interface userAccountService {
    userAccount userRegister(userAccount newUser);
    userAccount userLogin(String email);
}
