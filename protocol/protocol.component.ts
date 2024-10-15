import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ודא שייבאת את FormsModule
import Swal from 'sweetalert2'; // ייבוא SweetAlert2

@Component({
  selector: 'app-protocol',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './protocol.component.html',
  styleUrl: './protocol.component.css'
})
export class ProtocolComponent {
  newIncident: string = '';
  newIncidentTitle:string = '';
  place:string = '';
  isUrgent: boolean = false;
  addIncident() {
    // בדיקה אם כל השדות מלאים
    if (this.newIncident.trim() && this.newIncidentTitle.trim() && this.place.trim()) {
      // הצגת הודעת הצלחה עם Swal
      Swal.fire({
        title: 'הצלחה!',
        text: 'המקרה נוסף בהצלחה!',
        icon: 'success',
        confirmButtonText: 'אישור'
      }).then(() => {
        // איפוס הטופס אחרי סגירת הודעת Swal
        this.newIncident = '';
        this.newIncidentTitle = '';
        this.place = '';
        this.isUrgent = false;
      });
    } else {
      // הצגת הודעת שגיאה אם אחד השדות ריק
      Swal.fire({
        title: 'שגיאה',
        text: 'אחד השדות לא מולאו, נא למלא את כל השדות.',
        icon: 'error',
        confirmButtonText: 'אישור'
      });
    }
  }
}
