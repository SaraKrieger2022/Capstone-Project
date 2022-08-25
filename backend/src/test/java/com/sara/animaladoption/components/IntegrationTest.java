package com.sara.animaladoption.components;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
    @Test
    void getAllAnimals() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.get("/animals"))
                .andExpect(status().is(200))
                //       .andReturn().getResponse().getContentAsString();
                .andExpect(jsonPath("$", hasSize(0)))

                .andExpect(content().json("""
                        []
                        """));

        //System.out.println(result);
    }


}
