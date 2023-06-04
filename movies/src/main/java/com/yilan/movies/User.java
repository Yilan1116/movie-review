package com.yilan.movies;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@ToString
@Document(collection="user")
public class User {

    private String username;
    private String password;

    public User(String username, String password) {

        this.username = username;
        this.password = password;
    }
}
