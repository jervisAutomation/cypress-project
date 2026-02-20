import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Given("I check the booking ids",()=>{
    cy.request('GET','https://restful-booker.herokuapp.com/booking').then((response)=>{
        expect(response.status).to.eq(200);
    })
})