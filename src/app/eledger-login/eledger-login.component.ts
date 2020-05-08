import { UI_URL } from './../static/properties';
import { Keys } from './../model/key';
import { SessionModel } from './../model/sessionmodel';
import { UserData } from './../model/UserData';
import { EledgerUser } from './../classes/EledgerUser';
import { Component, OnInit } from '@angular/core';
import { EledgerApiService } from '../services/eledgerapi.service';
import { HeaderData } from '../model/headerData';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-eledger-login',
  templateUrl: './eledger-login.component.html',
  styleUrls: ['./eledger-login.component.css']
})
export class EledgerLoginComponent implements OnInit {

  userData: UserData[];
  user: UserData;
  sessionModel = new SessionModel();
  headerData = new HeaderData();
  url: string;

  constructor(private notify: AlertService, private _eledgerUser: EledgerUser, private service: EledgerApiService) { }

  ngOnInit(): void {
    this.headerData.isHeader = false;
    this.service.emitHeaderChangeEvent(this.headerData);
    this.isValid = true;
    this.url = "/lenders";

    //User Management get API to get data of lenders
    this._eledgerUser.getEledgerLenders(this.url).subscribe(
      data => {
        this.userData = data["data"];
      })
  }
  userID: string;
  password: string;
  isValid: boolean;
  name: string;


  login() {
    const userID = this.userID;
    const password = this.password;
    let check = this.checkValidUser(userID, password);

    if (check) {
      this.name = this.sessionModel.getSession(Keys.name);
      this.notify.showSuccess("Welcome " + this.name, "Successful");
      window.location.href = (UI_URL + "/home");
    } else {
      this.isValid = false;
    }
  }
  checkValidUser(userID, password): boolean {

    for (let user of this.userData) {
      if ((user.phone == userID || user.email == userID) && user.password == password) {
        this.sessionModel.setSession(Keys.id, user.id);
        this.sessionModel.setSession(Keys.lenderId, user.lenderId);
        this.sessionModel.setSession(Keys.shopName, user.shopName);
        this.sessionModel.setSession(Keys.name, user.name);
        this.sessionModel.setSession(Keys.email, user.email);
        this.sessionModel.setSession(Keys.phone, user.phone);
        return true;
      }
    }
    return false;
  }
}