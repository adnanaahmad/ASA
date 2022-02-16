import { NgModule } from '@angular/core';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import {SharedModule} from "../../../shared/shared.module";
import { AddOrganizationDialogComponent } from './components/add-organization-dialog/add-organization-dialog.component';
import { BasicInfoOrganizationComponent } from './components/basic-info-organization/basic-info-organization.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    AddOrganizationDialogComponent,
    BasicInfoOrganizationComponent
  ],
    imports: [
      SharedModule,
      OrganizationRoutingModule,
    ]
})
export class OrganizationModule { }
