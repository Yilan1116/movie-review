package com.yilan.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserMapper extends MongoRepository<User, String> {



        User findByUsername(String username);
    }

