/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   etools-profile-dropdown.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `etools-profile-dropdown`
 * User profile dropdown for header toolbar.
 */
declare class EtoolsProfileDropdown extends PolymerElement {
  opened: boolean | null | undefined;
  userProfileDialog: object | null | undefined;

  /**
   * Expected structure of array elements :
   *
   *      el = {
   *        label: 'element label',
   *        value: '234'
   *      }
   */
  sections: any[] | null | undefined;

  /**
   * Expected structure of array elements :
   *
   *      el = {
   *        label: 'element label',
   *        value: '234'
   *      }
   */
  offices: any[] | null | undefined;

  /**
   * Expected structure of array elements :
   *
   *      user = {
   *        label: user.full_name,
   *        value: user.id
   *      }
   */
  users: object | null | undefined;

  /**
   * Profile object should be according to api endpoint
   *  `/users/myprofile/`
   *  and all modifications should be POSTed to the same endpoint
   */
  profile: object | null | undefined;
  showEmail: boolean;
  _loadingProfileMsgActive: boolean | null | undefined;
  connectedCallback(): void;
  _dispatchSaveProfileEvent(ev: any): void;
  _dataLoaded(): void;
  _setDialogProfileData(): void;
  _allHaveValues(): any;
  _logout(): void;
  _openUserProfileDialog(): void;
  _toggleMenu(): void;
  _isInPath(path: any, prop: any, value: any): any;
}

declare global {

  interface HTMLElementTagNameMap {
    "etools-profile-dropdown": EtoolsProfileDropdown;
  }
}
