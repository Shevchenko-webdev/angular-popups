# Angular Popups

The project contains a method of implementation by the management of pop-ups

## How to start

1. `npm install` to install all necessary dependencies
2. `ng serve` to run project on localhost

## Description

Project contains:
### `popups.module.ts`
Contains popup layout component, confirm and copy code popup components and popups service

### `PopupsService`
Service uses to store type of popups (unique name) and current active popup. Also, it contains getter and setter for active popup and method to hide active popup.

### `PopupLayoutComponent`
The component is used to place inside the content of any pop-up windows of the program. Inside the markup of this component there is a popup overlay, a popup wrapper, and a popup header. Additionally, it includes the `<ng-content>` tag to allow the developer to pass any individual popup component inside layout.

### `ConfirmPopupComponent`
- individual popup component
- contains markup for confirm popup with title, description and 2 action buttons
- title can be passed via `@Input` decorator
- description can be passed via `@Input` decorator of `<ng-content>` tag.
- action buttons emits 2 `@Output` events (`onConfirm` and `onClose`)

### `CopyCodeComponent`
- individual popup component
- contains markup for copy code popup with title, description and action button
- title can be passed via `@Input` decorator
- description is static
- action button emit @Output `onClose` event

### `Popup` base component
- base class for individual popup component
- can store all logic that is repeated by several popups
- now contains `@Output` `onClose` event and `close()` method that uses for both individual popup component

### `AppComponent`
- .html file of this component contains buttons that allows to open appropriate popup and groups of `popup-layout`+`individual-popup-component` with all necessary for popup input data
- .ts file of this component contains all logic, that should be called on popup's buttons click


## How to add new popup
1. create individual popup component
2. use `Popup` base component to add logic that is repeated by several popups
3. use individual popup .scss file to add styles, that should be implemented only to current popup
4. add unique popup type name to `PopupType` type inside `PopupsService`
5. add group of `popup-layout`+`individual-popup-component`. Path all necessary for components data
6. add trigger to open popup using `PopupsService` setter
7. add trigger to close popup using `PopupsService` `hidePopup()` method 
8. Add necessary side logic on popup `@Output` event emit
