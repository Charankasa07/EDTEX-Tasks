import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { TrackLeavesComponent } from './track-leaves/track-leaves.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { OverviewComponent } from './overview/overview.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    ManagerDashboardComponent,
    ApplyLeaveComponent,
    TrackLeavesComponent,
    EditLeaveComponent,
    NewRequestsComponent,
    OverviewComponent,
    LeaveHistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
