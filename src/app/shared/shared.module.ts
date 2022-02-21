import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material.module";
import {ProductAccessComponent} from "./components/product-access/product-access.component";
import {HierarchyComponent} from "./components/hierarchy/hierarchy.component";
import {PoliciesComponent} from "./components/policies/policies.component";
import { TenantUserComponent } from './components/tenant-user/tenant-user.component';
import { OrganizationUserComponent } from './components/organization-user/organization-user.component';
import { BasicUserComponent } from './components/basic-user/basic-user.component';
import { MatChipFieldComponent } from './components/mat-chip-field/mat-chip-field.component';
import { MatAutocompleteFieldComponent } from './components/mat-autocomplete-field/mat-autocomplete-field.component';
import { MatFormFieldComponent } from './components/mat-form-field/mat-form-field.component';
import { MatUploadButtonComponent } from './components/mat-upload-button/mat-upload-button.component';
import { MatTextareaFieldComponent } from './components/mat-textarea-field/mat-textarea-field.component';
import { ProductAccessDetailComponent } from './components/product-access-detail/product-access-detail.component';
import { FwaAccessControlComponent } from './components/fwa-access-control/fwa-access-control.component';
import { MatIconButtonComponent } from './components/mat-icon-button/mat-icon-button.component';
import { CamelcaseToWordPipe } from './pipes/camecase-to-word/camelcase-to-word.pipe';
import { MatDialogCloseButtonComponent } from './components/mat-dialog-close-button/mat-dialog-close-button.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TableComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
    TenantUserComponent,
    OrganizationUserComponent,
    BasicUserComponent,
    MatChipFieldComponent,
    MatAutocompleteFieldComponent,
    MatFormFieldComponent,
    MatUploadButtonComponent,
    MatTextareaFieldComponent,
    ProductAccessDetailComponent,
    FwaAccessControlComponent,
    MatIconButtonComponent,
    CamelcaseToWordPipe,
    MatDialogCloseButtonComponent,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableComponent,
    ProductAccessComponent,
    HierarchyComponent,
    PoliciesComponent,
    TenantUserComponent,
    OrganizationUserComponent,
    BasicUserComponent,
    MatAutocompleteFieldComponent,
    MatChipFieldComponent,
    MatFormFieldComponent,
    MatUploadButtonComponent,
    MatTextareaFieldComponent,
    MatDialogCloseButtonComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
