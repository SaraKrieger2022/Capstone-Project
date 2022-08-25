package com.sara.animaladoption.components;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
    @Test
    void getAllAnimals() throws Exception {

        mockMvc.perform(get("/animals"))
                .andExpect(status().is(200))
                //       .andReturn().getResponse().getContentAsString();
                .andExpect(jsonPath("$", hasSize(0)))

                .andExpect(content().json("""
                        []
                        """));
    }

    @Test
    void addAnimal() throws Exception {
        mockMvc.perform(post("/animals")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"name": "Penny", "breed": "Jack Russell Terrier", "gender": "female", "colour": "black-white-brown",
                                 "age": "5", "size": "small", "vaccinated": true, "spayed_neutered": true, "healthy": true, "kids": true, 
                                 "other_dogs": true, "cats": false}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                        {"name": "Penny", "breed": "Jack Russell Terrier", "gender": "female", "colour": "black-white-brown",
                                 "age": "5", "size": "small", "vaccinated": true, "spayed_neutered": true, "healthy": true, "kids": true, 
                                 "other_dogs": true, "cats": false}
                        """));
    }

}
