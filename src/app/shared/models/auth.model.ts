/**
 * This interface defines the data type of login type. Like we have two
 * login types right now. Local that we will show to user and its values that we need to send to backend
 * is also the same but we have another login type that is Active Directory to show the user but
 * in actual we have to pass AD as loginType to backend in this scenario.
 */
export interface LoginTypes {
  loginType: string;
  value: string;
}

/**
 * This interface defines the login form data that we will get from user and pass to backend to get auth token.
 */
export interface LoginFormData {
  username: string;
  password: string;
  authtype: string;
  hidden_password?: string;
  grant_type?: string;
}

/**
 * This interface defines the loginResponse data type that we will get from the token generation api call.
 */
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
}

/**
 * This interface defines the API response type that we get when the user wants to go to FWA Finder.
 */
export interface FWAUserInfo {
  message: string;
  sessionstatus: boolean;
  token: string;
}

/**
 * This interface defines the principal data types. This will be gotten from principal api call.
 */
export interface PrincipalData {
  clientOnly: boolean;
  authenticated: boolean;
  name: string;
  principal: string;
  authorities: Array<Authority>;
  details: PrincipalDataDetails;
  userAuthentication: {
    authorities: Array<Authority>;
    details: {
      details: PrincipalDataDetails;
      authorities: Array<Authority>;
      authenticated: boolean;
      userAuthentication: {
        details: LoginFormData
      },
      clientOnly: boolean;
      principal: {
        accountNonExpired: boolean;
        accountNonLocked: boolean;
        credentialsNonExpired: boolean;
        enabled: boolean;
        password: string;
        username: string;
        authorities: Array<Authority>;
        user: principalUserData;
      };
      oauth2Request: {
        clientId: string;
        scope: Array<string>;
        requestParameters: LoginFormData;
        resourceIds: Array<any>;
        authorities: Array<Authority>;
        approved: boolean;
        redirectUri: string;
        responseTypes: Array<any>;
        extensions: object;
        grantType: string;
      };
    };
    authenticated: boolean;
    principal: string;
    name: string;
    credentials: any;
  };
  oauth2Request: {
    clientId: string;
    scope: Array<string>;
    requestParameters: LoginFormData;
    resourceIds: Array<any>;
    authorities: Array<Authority>;
    approved: boolean;
    refresh: boolean;
    redirectUri: string;
    responseTypes: Array<any>;
    extensions: object;
    grantType: string;
    refreshTokenRequest: any;
  };
  credentials: any;
}

/**
 * This interface defines the property of authorities.
 */
export interface Authority {
  authority: string;
}

/**
 * This interface defines the principal data details data types.
 */
export interface PrincipalDataDetails {
  remoteAddress: string;
  tokenValue: string;
  tokenType: string;
  decodedDetails: any;
  sessionId: any;
}

/**
 * This interface defines the properties of any user group.
 */
export interface UserGroup {
  userGroupId: string;
  description: string;
  name: string;
  departmentId: string;
  lock: any;
}

/**
 * This interface defines the user's data data-types that we get from principal API call.
 */
export interface principalUserData {
  lastLoginTime: number;
  createdTime: number;
  policyRetryAttempts: number;
  defaultProject: number;
  uploadedProfileFileId: number;
  userId: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
  preferredLanguage: string;
  schedulerPassword: string;
  userEmail: string;
  policyUserLocked: boolean;
  passwordNeverExpire: boolean;
  forcePasswordChange: boolean;
  isSuperAdmin: boolean;
  isDatabaseAdmin: boolean;
  isScriptingAllowed: boolean;
  isDeleted: boolean;
  userGroups: Array<UserGroup>;
  passwordLastChangedBy: any;
  parentUser: any;
  expiredDate: any;
}

/**
 * This interface defines the properties of security info that we get from securityInfo api call.
 */
export interface SecurityInfo {
  ai_workflow_access_groups: Array<string>;
  ai_workflow_access_left_menu: Array<AccessRights>;
  ai_workflow_access_right_menu: Array<AccessRights>;
  ai_workflow_access_case_view_list: Array<AccessRights>;
  ai_workflow_button_access: Array<AccessRights>;
  ai_workflow_empty_case_menu_access: Array<AccessRights>;
  ai_workflow_intake_persona_left_menu_access: Array<AccessRights>;
  ai_workflow_case_initiative_left_menu_access: Array<AccessRights>;
}

/**
 * This interface defines the properties of access rights.
 */
export interface AccessRights {
  ai_workflow_access_title: string;
  ai_workflow_access_data: string;
  ai_workflow_access_name: string;
  ai_workflow_access_create: string | number;
  ai_workflow_access_delete: string | number;
  ai_workflow_access_disable: string | number;
  ai_workflow_access_read: string | number;
  ai_workflow_access_update: string | number;
  ai_workflow_access_visiability: string | number
}

/**
 * This interface defines the CMT configurations data type.
 */
export interface CMTConfig {
  ai_workflow_options: Array<WorkFlowOptions>
}

/**
 * This interface defines the workflow options properties.
 */
export interface WorkFlowOptions {
  ai_workflow_option_text: string;
  ai_workflow_option_value: number | string | Array<WorkFlowOptionValue>
}

/**
 * This interface defines the work flow option value data types.
 */
export interface WorkFlowOptionValue {
  ai_workflow_node_activity_group: string;
  ai_workflow_internal_form_name_appender: string;
  ai_workflow_note_type: string;
  ai_workflow_stage: string;
  ai_workflow_status: string;
}

/**
 * This interface defines the locale settings data types against the logged user's profile.
 */
export interface LocaleSetting {
  ai_workflow_locale_setting_decimal_points: number;
  ai_workflow_application_page_zize: string;
  ai_workflow_locale_setting_case_alias: string;
  ai_workflow_locale_setting_currency_sign: string;
  ai_workflow_locale_setting_date_format: string;
  ai_workflow_locale_setting_date_format_full: string;
  ai_workflow_locale_setting_entity_types: string;
  ai_workflow_locale_setting_locale: string;
  ai_workflow_locale_setting_state_label: string;
  ai_workflow_locale_setting_subscriber_id_column: string;
  ai_workflow_locale_setting_zip_code_label: string;
}
