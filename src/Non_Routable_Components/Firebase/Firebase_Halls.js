import { type } from "@testing-library/user-event/dist/type";
import { firebase_database } from "./Firebase_Connection";
import { set, ref, push } from "firebase/database";

export function Insert_Hall(hall_name, hall_location, hall_capacity, hall_amenities) {
    if(typeof hall_name === typeof "") {
        if(typeof hall_location === typeof "") {
            if(typeof hall_capacity === typeof 0) {
                if(typeof hall_amenities === typeof []) {
                    const newPostRef = push(ref(firebase_database, "Halls/"));
                    set(newPostRef, {
                      "Name":hall_name,
                      "Location":hall_location,
                      "Capacity":hall_capacity,
                      "Amenities":hall_amenities
                    });
                }
            }
        }
    }
}

export function Update_Hall() {}

export function Load_Halls() {}

export function Delete_Hall() {}
