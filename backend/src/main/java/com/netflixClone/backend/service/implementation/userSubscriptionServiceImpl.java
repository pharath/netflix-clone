package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userSubscription;
import com.netflixClone.backend.repository.userSubscriptionRepo;
import com.netflixClone.backend.service.userSubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class userSubscriptionServiceImpl implements userSubscriptionService {

    @Autowired
    private userSubscriptionRepo userSubscriptionRepository;
    public userSubscription planRegistration(userSubscription newSubscriber){
        LocalDateTime subscribeDate=LocalDateTime.now();
        LocalDateTime expireDate=subscribeDate.plusDays(30);
        newSubscriber.setStartDate(subscribeDate);
        newSubscriber.setExpDate(expireDate);
        return userSubscriptionRepository.save(newSubscriber);
    }
    public boolean validateSubscription(String email){
        LocalDateTime currentDate=LocalDateTime.now();
        Optional<userSubscription> userSubscription=userSubscriptionRepository.findByEmail(email);
        if(userSubscription.isPresent()){
           return userSubscription.get().getExpDate().isAfter(currentDate);
        }
        return false;
    }
}
