import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ROLES } from "../constants/roles";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  userRole$: BehaviorSubject<ROLES> = new BehaviorSubject<ROLES>(ROLES.ADMIN);
}
