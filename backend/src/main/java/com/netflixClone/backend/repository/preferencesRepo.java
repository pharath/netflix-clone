package com.netflixClone.backend.repository;

import com.netflixClone.backend.model.userVideoList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface preferencesRepo extends JpaRepository<userVideoList,Long> {
    void deleteByEmailAndProfileNameAndVideoTitle(String email,String profileName,String videoTitle);
    void deleteByEmailAndProfileName(String email,String profileName);
    List<userVideoList> findAllByEmailAndProfileName(String email, String profileName);
    Optional<userVideoList> findByEmailAndProfileNameAndVideoTitle(String email,String profileName,String videoTitle);
}
