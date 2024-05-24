package com.example.gamingserverapp.model;

// import javax.persistence.*; // for Spring Boot 2
import jakarta.persistence.*; // for Spring Boot 3

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "username")
    private String username;

    @Column(name = "first name")
    private String firstName;

    @Column(name = "last name")
    private String lastName;

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean isActive) {
        this.active = isActive;
    }

    @Column(name = "active")
    private boolean active;

    public User() {

    }

    public User(String username, String firstName, String lastName, boolean active) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", username=" + username + ", first_name=" + firstName + ", last_name=" + lastName + ", active=" + active + "]";
    }
}

