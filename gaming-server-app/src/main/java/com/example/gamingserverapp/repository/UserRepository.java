package com.example.gamingserverapp.repository;

import java.util.List;

import com.example.gamingserverapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByActive(boolean active);

    List<User> findByUsernameContaining(String username);
}