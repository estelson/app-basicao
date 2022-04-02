//import { environment } from './../../environments/environment';
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { HelperService } from "../services/helper/helper.service";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "firebase/firestore";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.page.html",
  styleUrls: ["./cadastro.page.scss"],
})
export class CadastroPage implements OnInit {

  email = this.getEmail();
  contactField: null;
  messageField: null;

  constructor(private alertController: AlertController, private helper: HelperService) { }

  ngOnInit() {
  }

  async sendForm(f: NgForm) {
    /**
     * Firebase Firestore Test
     */
    const db = getFirestore();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Noêmia",
        last: "Fernandes de Medeiros",
        born: 1945
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()} => ${doc.get("first")} ${doc.get("last")} => ${doc.get("born")}`);
    });
    /* END of Firebase Firestore Test*/

    const message = "Contato: " + this.contactField + "<br>Mensagem: " + this.messageField;

    const alert = await this.alertController.create({
      header: "Alerta!",
      message,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Canceled");
          }
        }, 
        {
          text: "Ok",
          handler: () => {
            console.log("Alert Confirmed");
          }
        }
      ]
    });

    await alert.present();
  }

  getEmail() {
    const email = this.helper.getUrlParameter("email");
    console.log(email);

    return email;
  }

}
