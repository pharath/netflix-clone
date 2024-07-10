package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userAccount;
import com.netflixClone.backend.repository.userAccountRepo;
import com.netflixClone.backend.service.userAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userAccountServiceImpl implements userAccountService{
    @Autowired
    private userAccountRepo userAccountRepository;

    public userAccount userRegister(userAccount newUser){
        return  userAccountRepository.save(newUser);
    }
    public userAccount userLogin(String email){
        Optional<userAccount> userAccount= userAccountRepository.findByEmail(email);
        if(userAccount.isPresent())
            return userAccount.get();
        else
            return null;
    }
}
