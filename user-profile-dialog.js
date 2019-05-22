import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-input/paper-input.js';
import 'etools-dialog/etools-dialog.js';
import 'etools-dropdown/etools-dropdown.js';
import 'etools-dropdown/etools-dropdown-multi.js';

/**
 * @polymer
 * @customElement
 */
class EtoolsUserProfileDialog extends PolymerElement {
  static get template() {
    // language=HTML
    return html`
      <style>
        [hidden] {
          display: none !important;
        }

        :host {
          --paper-dialog-scrollable: {
            width: 100%;
            overflow-x: hidden;
            max-height: 600px;
          };
        }

        paper-input {
          width: 100%;
        }

        #profile-content {
          overflow: hidden;
          box-sizing: border-box;
          @apply --user-profile-dropdown-content;
        }

        .row-h {
          @apply --layout-horizontal;
        }

        .flex-c {
          /* flex container */
          @apply --layout-flex;
        }

        .row-h + .row-h, .row-v + .row-v {
          margin-top: 20px;
        }

        .row-h:first-child + .row-v {
          margin-top: 0;
        }

        .col {
          @apply --layout-horizontal;
          box-sizing: border-box;
        }

        .col:not(:first-child) {
          padding-left: 24px;
        }

        .col-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }

        .col-12 {
          flex: 0 0 100%;
          max-width: 100%;
        }

      </style>

      <etools-dialog id="userProfileDialog" size="lg" ok-btn-text="Save" dialog-title="My Profile"
                     on-close="_closeUserProfileDialog">

        <div id="profile-content">
          <!-- FIELDS HIDDEN AS REQUIRED BY BUSINESS SPECS - CH6215 -->
          <!-- <div class="row-h flex-c">
              <div class="col col-6">
                <etools-dropdown id="office" label="Office" placeholder="—" selected="{{profile.office}}"
                                 options="[[offices]]" auto-validate="" error-message="Please select an office">
                </etools-dropdown>
              </div>
              <div class="col col-6">
                <etools-dropdown id="section" label="Section" placeholder="—" selected="{{profile.section}}"
                                 options="[[sections]]" auto-validate="" error-message="Please select a section">
                </etools-dropdown>
              </div>
            </div>
            <div class="row-h flex-c">
              <div class="col col-6">
                <paper-input label="Job title" value="{{profile.job_title}}" placeholder="—"></paper-input>
              </div>
              <div class="col col-6">
                <paper-input label="Phone number" value="{{profile.phone_number}}" placeholder="—"></paper-input>
              </div>
            </div>
            <div class="row-h flex-c">
              <div class="col col-6">
                <paper-input id="supervisor" label="My supervisor" placeholder="—" value="[[profile.supervisor]]"
                             readonly="">
                </paper-input>
              </div>
              <div class="col col-6">
                <etools-dropdown id="oic" label="My OIC" placeholder="—" selected="{{profile.oic}}" options="[[users]]"
                                 auto-validate="" error-message="Please select an OIC">
                </etools-dropdown>
              </div>
            </div> -->
            <div class="row-h flex-c">
              <div class="col col-12">
                <etools-dropdown-multi id="workspaces" label="Available workspaces" placeholder="—"
                                       selected-values="[[availableCountryIds]]" options="[[profile.countries_available]]"
                                       option-value="id" option-label="name" readonly>
                </etools-dropdown-multi>
              </div>
            </div>
            <div class="row-h flex-c">
              <div class="col col-12">
                <etools-dropdown-multi id="groups" label="My Groups" placeholder="—" selected-values="[[availableGroups]]"
                                       options="[[profile.groups]]" option-value="id" option-label="name" readonly>
                </etools-dropdown-multi>
              </div>
            </div>
            <!-- <div class="row-h flex-c">
              <div class="col col-12">
                <etools-dropdown-multi id="supervisees" label="My supervisees" placeholder="—"
                                       selected-values="[[profile.supervisees]]" options="[[users]]" readonly>
                </etools-dropdown-multi>
              </div>
            </div> -->
          </div>
  
        </etools-dialog>
`;
  }

  static get is() {
    return 'etools-user-profile-dialog';
  }

  static get properties() {
    return {
      profile: {
        type: Object,
        notify: true
      },
      // offices: Array,
      // sections: Array,
      // users: Array,
      availableCountryIds: Array,
      availableGroups: Array
    };
  }

  static get observers() {
    return ['_mapIds(profile)'];
  }

  openUserProfileDialog() {
    this.$.userProfileDialog.opened = true;
  }

  _closeUserProfileDialog(e) {
    if (e.detail.confirmed) {
      this.saveData();
    }
  }

  _mapIds(profile) {
    if (profile === undefined) {
      return;
    }
    let availableCountryIds = this.profile.countries_available.map(x => x['id']);
    let availableGroups = this.profile.groups.map(x => x['id']);

    this.set('availableCountryIds', availableCountryIds);
    this.set('availableGroups', availableGroups);
  }

  saveData() {
    this.dispatchEvent(new CustomEvent('save-profile', {
      detail: {profile: this.profile},
      bubbles: true,
      composed: true
    }));
  }
}

window.customElements.define(EtoolsUserProfileDialog.is, EtoolsUserProfileDialog);
