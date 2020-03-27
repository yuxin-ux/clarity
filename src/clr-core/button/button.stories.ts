/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/button';
import { ClrLoadingState } from '@clr/core/button';
import { cssGroup, propertiesGroup, setStyles } from '@clr/core/common';
import '@clr/core/icon';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Components/Button/Stories',
  component: 'cds-button',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
    },
  },
};

export const API = () => {
  const slot = text('slot', 'Hello World', propertiesGroup);
  const actionType = select(
    'action',
    { 'solid (default)': 'solid', outline: 'outline', flat: 'flat' },
    undefined,
    propertiesGroup
  );
  const buttonStatus = select(
    'status',
    { 'primary (default)': 'primary', success: 'success', danger: 'danger', inverse: 'inverse' },
    undefined,
    propertiesGroup
  );
  const size = select('size', { 'medium (default)': 'md', sm: 'sm', icon: 'icon' }, undefined, propertiesGroup);
  const disabled = boolean('disabled', false, propertiesGroup);
  const loadingState = select(
    'loadingState',
    {
      default: ClrLoadingState.DEFAULT,
      error: ClrLoadingState.ERROR,
      loading: ClrLoadingState.LOADING,
      success: ClrLoadingState.SUCCESS,
    },
    ClrLoadingState.DEFAULT,
    propertiesGroup
  );

  const buttonColor = color('--color', undefined, cssGroup);
  const background = color('--background', undefined, cssGroup);
  const boxShadowColor = color('--box-shadow-color', undefined, cssGroup);
  const borderColor = color('--border-color', undefined, cssGroup);
  const borderWidth = text('--border-width', undefined, cssGroup);
  const borderRadius = text('--border-radius', undefined, cssGroup);
  const fontSize = text('--font-size', undefined, cssGroup);
  const fontWeight = text('--font-weight', undefined, cssGroup);
  const fontFamily = text('--font-family', undefined, cssGroup);
  const textTransform = text('--text-transform', undefined, cssGroup);
  const letterSpacing = text('--letter-spacing', undefined, cssGroup);
  const padding = text('--padding', undefined, cssGroup);
  const height = text('--height', undefined, cssGroup);

  return html`
    <cds-demo ?inverse=${buttonStatus === 'inverse'} inline-block>
      <style>
        cds-button {
          ${setStyles({
            '--color': buttonColor,
            '--background': background,
            '--box-shadow-color': boxShadowColor,
            '--border-color': borderColor,
            '--border-width': borderWidth,
            '--border-radius': borderRadius,
            '--font-size': fontSize,
            '--font-weight': fontWeight,
            '--font-family': fontFamily,
            '--text-transform': textTransform,
            '--letter-spacing': letterSpacing,
            '--padding': padding,
            '--height': height,
          })}
      </style>
      <cds-button
        .action=${actionType}
        .status=${buttonStatus}
        .size=${size}
        .loadingState=${loadingState}
        .disabled=${disabled}
        @click=${action('click')}>
        ${size === 'icon' ? html`<cds-icon></cds-icon>` : slot}
      </cds-button>
    </cds-demo>
  `;
};

export const form = () => {
  return html`
    <form cds-layout="vertical gap:sm" @submit="${(e: Event) => {
      e.preventDefault();
      action('submit')(e);
    }}">
      <div cds-layout="vertical gap:xs">
        <label for="name" cds-text="caption">Name</label>
        <input id="name" />
      </div>
      <cds-button type="submit">submit</cds-button>
    </form>
  `;
};

export const actions = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button>solid</cds-button>
      <cds-button action="outline">outline</cds-button>
      <cds-button action="flat">link</cds-button>
    </div>
  `;
};

export const status = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button>primary</cds-button>
      <cds-button status="success">success</cds-button>
      <cds-button status="danger">danger</cds-button>
      <cds-button status="danger" disabled>disabled</cds-button>
    </div>
`;
};

export const statusOutline = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button action="outline">primary</cds-button>
      <cds-button action="outline" status="success">success</cds-button>
      <cds-button action="outline" status="danger">danger</cds-button>
      <cds-button action="outline" disabled>disabled</cds-button>
    </div>
`;
};

export const iconSolid = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button aria-label="user account" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      <cds-button aria-label="user account" disabled size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      <cds-button aria-label="user account" status="success" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      <cds-button aria-label="user account" status="danger" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    </div>
  `;
};

export const iconOutline = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button aria-label="user account" action="outline" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      <cds-button aria-label="user account" action="outline" disabled size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      <cds-button aria-label="user account" action="outline" status="success" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      <cds-button aria-label="user account" action="outline" status="danger" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
    </div>
  `;
};

export const iconWithText = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button><cds-icon shape="user"></cds-icon> user account</cds-button>
      <cds-button action="outline"><cds-icon shape="user"></cds-icon> user account</cds-button>
      <cds-button action="flat"><cds-icon shape="user"></cds-icon> user account</cds-button>
    </div>
  `;
};

export const links = () => {
  return html`
    <div cds-layout="horizontal gap:xs">
      <cds-button>
        <a href="#">link</a>
      </cds-button>

      <cds-button>
        <a href="#">this is a long link</a>
      </cds-button>

      <cds-button size="sm">
        <a href="#">small link</a>
      </cds-button>
      <br />
      <cds-button action="outline">
        <a href="#">link</a>
      </cds-button>

      <cds-button action="outline">
        <a href="#">this is a long link</a>
      </cds-button>

      <cds-button action="outline" size="sm">
        <a href="#">small link</a>
      </cds-button>
    </div>
  `;
};

export const sizes = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <div cds-layout="horizontal align-items:bottom gap:xs">
        <cds-button>default</cds-button>
        <cds-button size="sm">small</cds-button>
        <cds-button aria-label="user account" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      </div>
      <div cds-layout="horizontal align-items:bottom gap:xs">
        <cds-button action="outline">default</cds-button>
        <cds-button action="outline" size="sm">small</cds-button>
        <cds-button action="outline" aria-label="user account" size="icon"><cds-icon shape="user"></cds-icon></cds-button>
      </div>
    </div>
  `;
};

export const loading = () => {
  return html`
    <div cds-layout="horizontal gap:xs align-items:bottom">
      <cds-button .loadingState="${ClrLoadingState.LOADING}">solid</cds-button>
      <cds-button action="outline" .loadingState="${ClrLoadingState.LOADING}">outline</cds-button>
      <cds-button size="sm" .loadingState="${ClrLoadingState.LOADING}">small</cds-button>
    </div>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .btn-branding {
        --background: #a447bb;
        --border-color: #74178b;
        --border-width: 0.15rem;
        --border-radius: 0.4rem;
        --text-transform: capitalize;
        --padding-vertical: 0.9rem;
        --padding-horizontal: 1rem;
        --font-size: 0.9rem;
        --font-weight: bolder;
        --font-family: 'Courier New', monospace;
        --height: 2.4rem;
      }

      .btn-branding:hover {
        --background: #74178b;
      }

      .btn-branding:active {
        --border-color: #44005b;
        --box-shadow-color: #44005b;
      }
    </style>
    <cds-button class="btn-branding">button</cds-button>
  `;
};
