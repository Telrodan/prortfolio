import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import { SideMenuComponent } from './features/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './features/home/home.component';
import { WorksComponent } from './features/works/works.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { ButtonModule } from 'primeng/button';
import { TodoListComponent } from './features/works/todo-list/todo-list.component';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { AddTaskComponent } from './features/works/todo-list/add-task/add-task.component';
import { AddListComponent } from './features/works/todo-list/add-list/add-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { EditListComponent } from './features/works/todo-list/edit-list/edit-list.component';
import { StoreModule } from '@ngrx/store';
import { todoListReducer } from './core/store/todo-list.reducer';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { StyleClassModule } from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    HomeComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    TodoListComponent,
    AddTaskComponent,
    AddListComponent,
    EditListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    MatDialogModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    HttpClientModule,
    StyleClassModule,
    CardModule,
    DropdownModule,
    PaginatorModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todoList: todoListReducer })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
