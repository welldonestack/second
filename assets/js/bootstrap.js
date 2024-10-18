/*!
 * Bootstrap v4.1.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/* line 1, node_modules/bootstrap/scss/_root.scss */
:root {
  --blue: #5b53ec;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #bd081c;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #24b47e;
  --teal: #20c997;
  --cyan: #46f8ff;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #bd081c;
  --secondary: #6c757d;
  --success: #24b47e;
  --info: #46f8ff;
  --warning: #ffc107;
  --danger: #bd081c;
  --light: #fff;
  --dark: #343a40;
  --purple: #6f42c1;
  --purplepink: #9742c1;
  --indigo: #6610f2;
  --pink: #e83e8c;
  --cyan: #46f8ff;
  --lightgreen: #7eec9d;
  --graylight: #f8f9fa;
  --gray200: #eee;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

/* line 21, node_modules/bootstrap/scss/_reboot.scss */
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

/* line 27, node_modules/bootstrap/scss/_reboot.scss */
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

@-ms-viewport {
  width: device-width; }

/* line 45, node_modules/bootstrap/scss/_reboot.scss */
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block; }

/* line 57, node_modules/bootstrap/scss/_reboot.scss */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #343a40;
  text-align: left;
  background-color: #fff; }

/* line 73, node_modules/bootstrap/scss/_reboot.scss */
[tabindex="-1"]:focus {
  outline: 0 !important; }

/* line 83, node_modules/bootstrap/scss/_reboot.scss */
hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible; }

/* line 99, node_modules/bootstrap/scss/_reboot.scss */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem; }

/* line 109, node_modules/bootstrap/scss/_reboot.scss */
p {
  margin-top: 0;
  margin-bottom: 1rem; }

/* line 121, node_modules/bootstrap/scss/_reboot.scss */
abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0; }

/* line 129, node_modules/bootstrap/scss/_reboot.scss */
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit; }

/* line 135, node_modules/bootstrap/scss/_reboot.scss */
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem; }

/* line 142, node_modules/bootstrap/scss/_reboot.scss */
ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0; }

/* line 149, node_modules/bootstrap/scss/_reboot.scss */
dt {
  font-weight: 700; }

/* line 153, node_modules/bootstrap/scss/_reboot.scss */
dd {
  margin-bottom: .5rem;
  margin-left: 0; }

/* line 158, node_modules/bootstrap/scss/_reboot.scss */
blockquote {
  margin: 0 0 1rem; }

/* line 162, node_modules/bootstrap/scss/_reboot.scss */
dfn {
  font-style: italic; }

/* line 167, node_modules/bootstrap/scss/_reboot.scss */
b,
strong {
  font-weight: bolder; }

/* line 173, node_modules/bootstrap/scss/_reboot.scss */
small {
  font-size: 80%; }

/* line 182, node_modules/bootstrap/scss/_reboot.scss */
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline; }

/* line 190, node_modules/bootstrap/scss/_reboot.scss */
sub {
  bottom: -.25em; }

/* line 191, node_modules/bootstrap/scss/_reboot.scss */
sup {
  top: -.5em; }

/* line 198, node_modules/bootstrap/scss/_reboot.scss */
a {
  color: #bd081c;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  a:hover {
    color: #740511;
    text-decoration: underline; }

/* line 216, node_modules/bootstrap/scss/_reboot.scss */
a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none; }
  /* line 225, node_modules/bootstrap/scss/_reboot.scss */
  a:not([href]):not([tabindex]):focus {
    outline: 0; }

/* line 235, node_modules/bootstrap/scss/_reboot.scss */
pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em; }

/* line 243, node_modules/bootstrap/scss/_reboot.scss */
pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar; }

/* line 260, node_modules/bootstrap/scss/_reboot.scss */
figure {
  margin: 0 0 1rem; }

/* line 270, node_modules/bootstrap/scss/_reboot.scss */
img {
  vertical-align: middle;
  border-style: none; }

/* line 275, node_modules/bootstrap/scss/_reboot.scss */
svg:not(:root) {
  overflow: hidden; }

/* line 284, node_modules/bootstrap/scss/_reboot.scss */
table {
  border-collapse: collapse; }

/* line 288, node_modules/bootstrap/scss/_reboot.scss */
caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #adb5bd;
  text-align: left;
  caption-side: bottom; }

/* line 296, node_modules/bootstrap/scss/_reboot.scss */
th {
  text-align: inherit; }

/* line 307, node_modules/bootstrap/scss/_reboot.scss */
label {
  display: inline-block;
  margin-bottom: 0.5rem; }

/* line 316, node_modules/bootstrap/scss/_reboot.scss */
button {
  border-radius: 0; }

/* line 324, node_modules/bootstrap/scss/_reboot.scss */
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color; }

/* line 329, node_modules/bootstrap/scss/_reboot.scss */
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit; }

/* line 340, node_modules/bootstrap/scss/_reboot.scss */
button,
input {
  overflow: visible; }

/* line 345, node_modules/bootstrap/scss/_reboot.scss */
button,
select {
  text-transform: none; }

/* line 353, node_modules/bootstrap/scss/_reboot.scss */
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }

/* line 361, node_modules/bootstrap/scss/_reboot.scss */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none; }

/* line 369, node_modules/bootstrap/scss/_reboot.scss */
input[type="radio"],
input[type="checkbox"] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0; }

/* line 376, node_modules/bootstrap/scss/_reboot.scss */
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox; }

/* line 388, node_modules/bootstrap/scss/_reboot.scss */
textarea {
  overflow: auto;
  resize: vertical; }

/* line 394, node_modules/bootstrap/scss/_reboot.scss */
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0; }

/* line 409, node_modules/bootstrap/scss/_reboot.scss */
legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal; }

/* line 421, node_modules/bootstrap/scss/_reboot.scss */
progress {
  vertical-align: baseline; }

/* line 426, node_modules/bootstrap/scss/_reboot.scss */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto; }

/* line 431, node_modules/bootstrap/scss/_reboot.scss */
[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none; }

/* line 444, node_modules/bootstrap/scss/_reboot.scss */
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

/* line 454, node_modules/bootstrap/scss/_reboot.scss */
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button; }

/* line 463, node_modules/bootstrap/scss/_reboot.scss */
output {
  display: inline-block; }

/* line 467, node_modules/bootstrap/scss/_reboot.scss */
summary {
  display: list-item;
  cursor: pointer; }

/* line 472, node_modules/bootstrap/scss/_reboot.scss */
template {
  display: none; }

/* line 478, node_modules/bootstrap/scss/_reboot.scss */
[hidden] {
  display: none !important; }

/* line 7, node_modules/bootstrap/scss/_type.scss */
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.3;
  color: inherit; }

/* line 16, node_modules/bootstrap/scss/_type.scss */
h1, .h1 {
  font-size: 2.5rem; }

/* line 17, node_modules/bootstrap/scss/_type.scss */
h2, .h2 {
  font-size: 2rem; }

/* line 18, node_modules/bootstrap/scss/_type.scss */
h3, .h3 {
  font-size: 1.75rem; }

/* line 19, node_modules/bootstrap/scss/_type.scss */
h4, .h4 {
  font-size: 1.5rem; }

/* line 20, node_modules/bootstrap/scss/_type.scss */
h5, .h5 {
  font-size: 1.25rem; }

/* line 21, node_modules/bootstrap/scss/_type.scss */
h6, .h6 {
  font-size: 1.15rem; }

/* line 23, node_modules/bootstrap/scss/_type.scss */
.lead {
  font-size: 1.25rem;
  font-weight: 300; }

/* line 29, node_modules/bootstrap/scss/_type.scss */
.display-1 {
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.3; }

/* line 34, node_modules/bootstrap/scss/_type.scss */
.display-2 {
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.3; }

/* line 39, node_modules/bootstrap/scss/_type.scss */
.display-3 {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.3; }

/* line 44, node_modules/bootstrap/scss/_type.scss */
.display-4 {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3; }

/* line 55, node_modules/bootstrap/scss/_type.scss */
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1); }

/* line 67, node_modules/bootstrap/scss/_type.scss */
small,
.small {
  font-size: 80%;
  font-weight: 400; }

/* line 73, node_modules/bootstrap/scss/_type.scss */
mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3; }

/* line 84, node_modules/bootstrap/scss/_type.scss */
.list-unstyled {
  padding-left: 0;
  list-style: none; }

/* line 89, node_modules/bootstrap/scss/_type.scss */
.list-inline {
  padding-left: 0;
  list-style: none; }

/* line 92, node_modules/bootstrap/scss/_type.scss */
.list-inline-item {
  display: inline-block; }
  /* line 95, node_modules/bootstrap/scss/_type.scss */
  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem; }

/* line 106, node_modules/bootstrap/scss/_type.scss */
.initialism {
  font-size: 90%;
  text-transform: uppercase; }

/* line 112, node_modules/bootstrap/scss/_type.scss */
.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem; }

/* line 117, node_modules/bootstrap/scss/_type.scss */
.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d; }
  /* line 122, node_modules/bootstrap/scss/_type.scss */
  .blockquote-footer::before {
    content: "\2014 \00A0"; }

/* line 8, node_modules/bootstrap/scss/_images.scss */
.img-fluid {
  max-width: 100%;
  height: auto; }

/* line 14, node_modules/bootstrap/scss/_images.scss */
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto; }

/* line 29, node_modules/bootstrap/scss/_images.scss */
.figure {
  display: inline-block; }

/* line 34, node_modules/bootstrap/scss/_images.scss */
.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1; }

/* line 39, node_modules/bootstrap/scss/_images.scss */
.figure-caption {
  font-size: 90%;
  color: #6c757d; }

/* line 2, node_modules/bootstrap/scss/_code.scss */
code {
  font-size: 87.5%;
  color: #e83e8c;
  word-break: break-word; }
  /* line 8, node_modules/bootstrap/scss/_code.scss */
  a > code {
    color: inherit; }

/* line 14, node_modules/bootstrap/scss/_code.scss */
kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem; }
  /* line 22, node_modules/bootstrap/scss/_code.scss */
  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700; }

/* line 31, node_modules/bootstrap/scss/_code.scss */
pre {
  display: block;
  font-size: 87.5%;
  color: #212529; }
  /* line 37, node_modules/bootstrap/scss/_code.scss */
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal; }

/* line 45, node_modules/bootstrap/scss/_code.scss */
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll; }

/* line 6, node_modules/bootstrap/scss/_grid.scss */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto; }
  @media (min-width: 576px) {
    /* line 6, node_modules/bootstrap/scss/_grid.scss */
    .container {
      max-width: 540px; } }
  @media (min-width: 768px) {
    /* line 6, node_modules/bootstrap/scss/_grid.scss */
    .container {
      max-width: 720px; } }
  @media (min-width: 992px) {
    /* line 6, node_modules/bootstrap/scss/_grid.scss */
    .container {
      max-width: 960px; } }
  @media (min-width: 1200px) {
    /* line 6, node_modules/bootstrap/scss/_grid.scss */
    .container {
      max-width: 1040px; } }

/* line 18, node_modules/bootstrap/scss/_grid.scss */
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto; }

/* line 28, node_modules/bootstrap/scss/_grid.scss */
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px; }

/* line 34, node_modules/bootstrap/scss/_grid.scss */
.no-gutters {
  margin-right: 0;
  margin-left: 0; }
  /* line 38, node_modules/bootstrap/scss/_grid.scss */
  .no-gutters > .col,
  .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0; }

/* line 8, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px; }

/* line 32, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col {
  -ms-flex-preferred-size: 0;
      flex-basis: 0;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%; }

/* line 37, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-auto {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  width: auto;
  max-width: none; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-1 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 8.33333%;
          flex: 0 0 8.33333%;
  max-width: 8.33333%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-2 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 16.66667%;
          flex: 0 0 16.66667%;
  max-width: 16.66667%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-3 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
  max-width: 25%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-4 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33333%;
          flex: 0 0 33.33333%;
  max-width: 33.33333%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-5 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 41.66667%;
          flex: 0 0 41.66667%;
  max-width: 41.66667%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-6 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-7 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 58.33333%;
          flex: 0 0 58.33333%;
  max-width: 58.33333%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-8 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 66.66667%;
          flex: 0 0 66.66667%;
  max-width: 66.66667%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-9 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 75%;
          flex: 0 0 75%;
  max-width: 75%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-10 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 83.33333%;
          flex: 0 0 83.33333%;
  max-width: 83.33333%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-11 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 91.66667%;
          flex: 0 0 91.66667%;
  max-width: 91.66667%; }

/* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.col-12 {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%; }

/* line 49, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-first {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1; }

/* line 51, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-last {
  -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
          order: 13; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-0 {
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-1 {
  -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
          order: 1; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-2 {
  -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
          order: 2; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-3 {
  -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
          order: 3; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-4 {
  -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
          order: 4; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-5 {
  -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
          order: 5; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-6 {
  -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
          order: 6; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-7 {
  -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
          order: 7; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-8 {
  -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
          order: 8; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-9 {
  -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
          order: 9; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-10 {
  -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
          order: 10; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-11 {
  -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
          order: 11; }

/* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.order-12 {
  -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
          order: 12; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-1 {
  margin-left: 8.33333%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-2 {
  margin-left: 16.66667%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-3 {
  margin-left: 25%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-4 {
  margin-left: 33.33333%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-5 {
  margin-left: 41.66667%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-6 {
  margin-left: 50%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-7 {
  margin-left: 58.33333%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-8 {
  margin-left: 66.66667%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-9 {
  margin-left: 75%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-10 {
  margin-left: 83.33333%; }

/* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
.offset-11 {
  margin-left: 91.66667%; }

@media (min-width: 576px) {
  /* line 32, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm {
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%; }
  /* line 37, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-auto {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
    max-width: none; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-1 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-2 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-3 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-4 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-5 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-6 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-7 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-8 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-9 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-10 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-11 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-sm-12 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }
  /* line 49, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-first {
    -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
            order: -1; }
  /* line 51, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-last {
    -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
            order: 13; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-0 {
    -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
            order: 0; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-1 {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-2 {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-3 {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-4 {
    -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
            order: 4; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-5 {
    -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
            order: 5; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-6 {
    -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
            order: 6; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-7 {
    -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
            order: 7; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-8 {
    -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
            order: 8; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-9 {
    -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
            order: 9; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-10 {
    -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
            order: 10; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-11 {
    -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
            order: 11; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-sm-12 {
    -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
            order: 12; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-0 {
    margin-left: 0; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-1 {
    margin-left: 8.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-2 {
    margin-left: 16.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-3 {
    margin-left: 25%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-4 {
    margin-left: 33.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-5 {
    margin-left: 41.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-6 {
    margin-left: 50%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-7 {
    margin-left: 58.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-8 {
    margin-left: 66.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-9 {
    margin-left: 75%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-10 {
    margin-left: 83.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-sm-11 {
    margin-left: 91.66667%; } }

@media (min-width: 768px) {
  /* line 32, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md {
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%; }
  /* line 37, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-auto {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
    max-width: none; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-1 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-2 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-3 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-4 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-5 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-6 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-7 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-8 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-9 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-10 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-11 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-md-12 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }
  /* line 49, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-first {
    -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
            order: -1; }
  /* line 51, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-last {
    -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
            order: 13; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-0 {
    -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
            order: 0; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-1 {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-2 {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-3 {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-4 {
    -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
            order: 4; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-5 {
    -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
            order: 5; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-6 {
    -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
            order: 6; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-7 {
    -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
            order: 7; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-8 {
    -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
            order: 8; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-9 {
    -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
            order: 9; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-10 {
    -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
            order: 10; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-11 {
    -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
            order: 11; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-md-12 {
    -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
            order: 12; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-0 {
    margin-left: 0; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-1 {
    margin-left: 8.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-2 {
    margin-left: 16.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-3 {
    margin-left: 25%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-4 {
    margin-left: 33.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-5 {
    margin-left: 41.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-6 {
    margin-left: 50%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-7 {
    margin-left: 58.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-8 {
    margin-left: 66.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-9 {
    margin-left: 75%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-10 {
    margin-left: 83.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-md-11 {
    margin-left: 91.66667%; } }

@media (min-width: 992px) {
  /* line 32, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg {
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%; }
  /* line 37, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-auto {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
    max-width: none; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-1 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-2 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-3 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-4 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-5 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-6 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-7 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-8 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-9 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-10 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-11 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-lg-12 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }
  /* line 49, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-first {
    -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
            order: -1; }
  /* line 51, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-last {
    -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
            order: 13; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-0 {
    -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
            order: 0; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-1 {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-2 {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-3 {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-4 {
    -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
            order: 4; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-5 {
    -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
            order: 5; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-6 {
    -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
            order: 6; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-7 {
    -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
            order: 7; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-8 {
    -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
            order: 8; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-9 {
    -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
            order: 9; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-10 {
    -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
            order: 10; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-11 {
    -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
            order: 11; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-lg-12 {
    -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
            order: 12; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-0 {
    margin-left: 0; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-1 {
    margin-left: 8.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-2 {
    margin-left: 16.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-3 {
    margin-left: 25%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-4 {
    margin-left: 33.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-5 {
    margin-left: 41.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-6 {
    margin-left: 50%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-7 {
    margin-left: 58.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-8 {
    margin-left: 66.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-9 {
    margin-left: 75%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-10 {
    margin-left: 83.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-lg-11 {
    margin-left: 91.66667%; } }

@media (min-width: 1200px) {
  /* line 32, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl {
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%; }
  /* line 37, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-auto {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
    max-width: none; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-1 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 8.33333%;
            flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-2 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 16.66667%;
            flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-3 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-4 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
            flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-5 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 41.66667%;
            flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-6 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-7 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 58.33333%;
            flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-8 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 66.66667%;
            flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-9 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-10 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 83.33333%;
            flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-11 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 91.66667%;
            flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  /* line 44, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .col-xl-12 {
    -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%; }
  /* line 49, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-first {
    -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
            order: -1; }
  /* line 51, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-last {
    -webkit-box-ordinal-group: 14;
        -ms-flex-order: 13;
            order: 13; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-0 {
    -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
            order: 0; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-1 {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-2 {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-3 {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-4 {
    -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
            order: 4; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-5 {
    -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
            order: 5; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-6 {
    -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
            order: 6; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-7 {
    -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
            order: 7; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-8 {
    -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
            order: 8; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-9 {
    -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
            order: 9; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-10 {
    -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
            order: 10; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-11 {
    -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
            order: 11; }
  /* line 54, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .order-xl-12 {
    -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
            order: 12; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-0 {
    margin-left: 0; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-1 {
    margin-left: 8.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-2 {
    margin-left: 16.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-3 {
    margin-left: 25%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-4 {
    margin-left: 33.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-5 {
    margin-left: 41.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-6 {
    margin-left: 50%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-7 {
    margin-left: 58.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-8 {
    margin-left: 66.66667%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-9 {
    margin-left: 75%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-10 {
    margin-left: 83.33333%; }
  /* line 60, node_modules/bootstrap/scss/mixins/_grid-framework.scss */
  .offset-xl-11 {
    margin-left: 91.66667%; } }

/* line 5, node_modules/bootstrap/scss/_tables.scss */
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent; }
  /* line 11, node_modules/bootstrap/scss/_tables.scss */
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6; }
  /* line 18, node_modules/bootstrap/scss/_tables.scss */
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6; }
  /* line 23, node_modules/bootstrap/scss/_tables.scss */
  .table tbody + tbody {
    border-top: 2px solid #dee2e6; }
  /* line 27, node_modules/bootstrap/scss/_tables.scss */
  .table .table {
    background-color: #fff; }

/* line 38, node_modules/bootstrap/scss/_tables.scss */
.table-sm th,
.table-sm td {
  padding: 0.3rem; }

/* line 49, node_modules/bootstrap/scss/_tables.scss */
.table-bordered {
  border: 1px solid #dee2e6; }
  /* line 52, node_modules/bootstrap/scss/_tables.scss */
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6; }
  /* line 58, node_modules/bootstrap/scss/_tables.scss */
  .table-bordered thead th,
  .table-bordered thead td {
    border-bottom-width: 2px; }

/* line 66, node_modules/bootstrap/scss/_tables.scss */
.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0; }

/* line 79, node_modules/bootstrap/scss/_tables.scss */
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05); }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075); }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-primary,
.table-primary > th,
.table-primary > td {
  background-color: #edbabf; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-primary:hover {
  background-color: #e8a6ac; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-primary:hover > td,
  .table-hover .table-primary:hover > th {
    background-color: #e8a6ac; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: #d6d8db; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-secondary:hover {
  background-color: #c8cbcf; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-secondary:hover > td,
  .table-hover .table-secondary:hover > th {
    background-color: #c8cbcf; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-success,
.table-success > th,
.table-success > td {
  background-color: #c2eadb; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-success:hover {
  background-color: #afe3d0; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-success:hover > td,
  .table-hover .table-success:hover > th {
    background-color: #afe3d0; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-info,
.table-info > th,
.table-info > td {
  background-color: #cbfdff; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-info:hover {
  background-color: #b2fcff; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-info:hover > td,
  .table-hover .table-info:hover > th {
    background-color: #b2fcff; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #ffeeba; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-warning:hover {
  background-color: #ffe8a1; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-warning:hover > td,
  .table-hover .table-warning:hover > th {
    background-color: #ffe8a1; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #edbabf; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-danger:hover {
  background-color: #e8a6ac; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-danger:hover > td,
  .table-hover .table-danger:hover > th {
    background-color: #e8a6ac; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-light,
.table-light > th,
.table-light > td {
  background-color: white; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-light:hover {
  background-color: #f2f2f2; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-light:hover > td,
  .table-hover .table-light:hover > th {
    background-color: #f2f2f2; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c6c8ca; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-dark:hover {
  background-color: #b9bbbe; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-dark:hover > td,
  .table-hover .table-dark:hover > th {
    background-color: #b9bbbe; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-purple,
.table-purple > th,
.table-purple > td {
  background-color: #d7caee; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-purple:hover {
  background-color: #c8b7e8; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-purple:hover > td,
  .table-hover .table-purple:hover > th {
    background-color: #c8b7e8; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-purplepink,
.table-purplepink > th,
.table-purplepink > td {
  background-color: #e2caee; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-purplepink:hover {
  background-color: #d7b7e8; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-purplepink:hover > td,
  .table-hover .table-purplepink:hover > th {
    background-color: #d7b7e8; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-indigo,
.table-indigo > th,
.table-indigo > td {
  background-color: #d4bcfb; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-indigo:hover {
  background-color: #c5a4fa; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-indigo:hover > td,
  .table-hover .table-indigo:hover > th {
    background-color: #c5a4fa; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-pink,
.table-pink > th,
.table-pink > td {
  background-color: #f9c9df; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-pink:hover {
  background-color: #f6b2d1; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-pink:hover > td,
  .table-hover .table-pink:hover > th {
    background-color: #f6b2d1; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-cyan,
.table-cyan > th,
.table-cyan > td {
  background-color: #cbfdff; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-cyan:hover {
  background-color: #b2fcff; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-cyan:hover > td,
  .table-hover .table-cyan:hover > th {
    background-color: #b2fcff; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-lightgreen,
.table-lightgreen > th,
.table-lightgreen > td {
  background-color: #dbfae4; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-lightgreen:hover {
  background-color: #c5f7d3; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-lightgreen:hover > td,
  .table-hover .table-lightgreen:hover > th {
    background-color: #c5f7d3; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-graylight,
.table-graylight > th,
.table-graylight > td {
  background-color: #fdfdfe; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-graylight:hover {
  background-color: #ececf6; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-graylight:hover > td,
  .table-hover .table-graylight:hover > th {
    background-color: #ececf6; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-gray200,
.table-gray200 > th,
.table-gray200 > td {
  background-color: #fafafa; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-gray200:hover {
  background-color: #ededed; }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-gray200:hover > td,
  .table-hover .table-gray200:hover > th {
    background-color: #ededed; }

/* line 7, node_modules/bootstrap/scss/mixins/_table-row.scss */
.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075); }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075); }
  /* line 23, node_modules/bootstrap/scss/mixins/_table-row.scss */
  .table-hover .table-active:hover > td,
  .table-hover .table-active:hover > th {
    background-color: rgba(0, 0, 0, 0.075); }

/* line 117, node_modules/bootstrap/scss/_tables.scss */
.table .thead-dark th {
  color: #fff;
  background-color: #212529;
  border-color: #32383e; }

/* line 125, node_modules/bootstrap/scss/_tables.scss */
.table .thead-light th {
  color: #495057;
  background-color: #eee;
  border-color: #dee2e6; }

/* line 133, node_modules/bootstrap/scss/_tables.scss */
.table-dark {
  color: #fff;
  background-color: #212529; }
  /* line 137, node_modules/bootstrap/scss/_tables.scss */
  .table-dark th,
  .table-dark td,
  .table-dark thead th {
    border-color: #32383e; }
  /* line 143, node_modules/bootstrap/scss/_tables.scss */
  .table-dark.table-bordered {
    border: 0; }
  /* line 148, node_modules/bootstrap/scss/_tables.scss */
  .table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.05); }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .table-dark.table-hover tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.075); }

@media (max-width: 575.98px) {
  /* line 173, node_modules/bootstrap/scss/_tables.scss */
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; }
    /* line 182, node_modules/bootstrap/scss/_tables.scss */
    .table-responsive-sm > .table-bordered {
      border: 0; } }

@media (max-width: 767.98px) {
  /* line 173, node_modules/bootstrap/scss/_tables.scss */
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; }
    /* line 182, node_modules/bootstrap/scss/_tables.scss */
    .table-responsive-md > .table-bordered {
      border: 0; } }

@media (max-width: 991.98px) {
  /* line 173, node_modules/bootstrap/scss/_tables.scss */
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; }
    /* line 182, node_modules/bootstrap/scss/_tables.scss */
    .table-responsive-lg > .table-bordered {
      border: 0; } }

@media (max-width: 1199.98px) {
  /* line 173, node_modules/bootstrap/scss/_tables.scss */
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar; }
    /* line 182, node_modules/bootstrap/scss/_tables.scss */
    .table-responsive-xl > .table-bordered {
      border: 0; } }

/* line 173, node_modules/bootstrap/scss/_tables.scss */
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; }
  /* line 182, node_modules/bootstrap/scss/_tables.scss */
  .table-responsive > .table-bordered {
    border: 0; }

/* line 7, node_modules/bootstrap/scss/_forms.scss */
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }
  @media screen and (prefers-reduced-motion: reduce) {
    /* line 7, node_modules/bootstrap/scss/_forms.scss */
    .form-control {
      -webkit-transition: none;
      transition: none; } }
  /* line 31, node_modules/bootstrap/scss/_forms.scss */
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0; }
  /* line 14, node_modules/bootstrap/scss/mixins/_forms.scss */
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #f74d60;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
  /* line 40, node_modules/bootstrap/scss/_forms.scss */
  .form-control::-webkit-input-placeholder {
    color: #6c757d;
    opacity: 1; }
  .form-control:-ms-input-placeholder {
    color: #6c757d;
    opacity: 1; }
  .form-control::-ms-input-placeholder {
    color: #6c757d;
    opacity: 1; }
  .form-control::placeholder {
    color: #6c757d;
    opacity: 1; }
  /* line 51, node_modules/bootstrap/scss/_forms.scss */
  .form-control:disabled, .form-control[readonly] {
    background-color: #eee;
    opacity: 1; }

/* line 60, node_modules/bootstrap/scss/_forms.scss */
select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px); }

/* line 64, node_modules/bootstrap/scss/_forms.scss */
select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff; }

/* line 76, node_modules/bootstrap/scss/_forms.scss */
.form-control-file,
.form-control-range {
  display: block;
  width: 100%; }

/* line 89, node_modules/bootstrap/scss/_forms.scss */
.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5; }

/* line 97, node_modules/bootstrap/scss/_forms.scss */
.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5; }

/* line 104, node_modules/bootstrap/scss/_forms.scss */
.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5; }

/* line 117, node_modules/bootstrap/scss/_forms.scss */
.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #343a40;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0; }
  /* line 129, node_modules/bootstrap/scss/_forms.scss */
  .form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,
  .input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,
  .input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,
  .input-group-sm > .input-group-prepend > .form-control-plaintext.btn,
  .input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,
  .input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,
  .input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,
  .input-group-lg > .input-group-prepend > .form-control-plaintext.btn,
  .input-group-lg > .input-group-append > .form-control-plaintext.btn {
    padding-right: 0;
    padding-left: 0; }

/* line 145, node_modules/bootstrap/scss/_forms.scss */
.form-control-sm, .input-group-sm > .form-control,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem; }

/* line 153, node_modules/bootstrap/scss/_forms.scss */
select.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),
.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),
.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),
.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),
.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {
  height: calc(1.8125rem + 2px); }

/* line 158, node_modules/bootstrap/scss/_forms.scss */
.form-control-lg, .input-group-lg > .form-control,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem; }

/* line 166, node_modules/bootstrap/scss/_forms.scss */
select.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),
.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),
.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),
.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),
.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {
  height: calc(2.875rem + 2px); }

/* line 177, node_modules/bootstrap/scss/_forms.scss */
.form-group {
  margin-bottom: 1rem; }

/* line 181, node_modules/bootstrap/scss/_forms.scss */
.form-text {
  display: block;
  margin-top: 0.25rem; }

/* line 191, node_modules/bootstrap/scss/_forms.scss */
.form-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px; }
  /* line 197, node_modules/bootstrap/scss/_forms.scss */
  .form-row > .col,
  .form-row > [class*="col-"] {
    padding-right: 5px;
    padding-left: 5px; }

/* line 209, node_modules/bootstrap/scss/_forms.scss */
.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem; }

/* line 215, node_modules/bootstrap/scss/_forms.scss */
.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem; }
  /* line 220, node_modules/bootstrap/scss/_forms.scss */
  .form-check-input:disabled ~ .form-check-label {
    color: #adb5bd; }

/* line 225, node_modules/bootstrap/scss/_forms.scss */
.form-check-label {
  margin-bottom: 0; }

/* line 229, node_modules/bootstrap/scss/_forms.scss */
.form-check-inline {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-left: 0;
  margin-right: 0.75rem; }
  /* line 236, node_modules/bootstrap/scss/_forms.scss */
  .form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: 0.3125rem;
    margin-left: 0; }

/* line 30, node_modules/bootstrap/scss/mixins/_forms.scss */
.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #24b47e; }

/* line 38, node_modules/bootstrap/scss/mixins/_forms.scss */
.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1;
  color: #fff;
  background-color: rgba(36, 180, 126, 0.8);
  border-radius: .2rem; }

/* line 55, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-control:valid, .form-control.is-valid, .was-validated
.custom-select:valid,
.custom-select.is-valid {
  border-color: #24b47e; }
  /* line 59, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated
  .custom-select:valid:focus,
  .custom-select.is-valid:focus {
    border-color: #24b47e;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.25); }
  /* line 64, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .form-control:valid ~ .valid-feedback,
  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,
  .form-control.is-valid ~ .valid-tooltip, .was-validated
  .custom-select:valid ~ .valid-feedback,
  .was-validated
  .custom-select:valid ~ .valid-tooltip,
  .custom-select.is-valid ~ .valid-feedback,
  .custom-select.is-valid ~ .valid-tooltip {
    display: block; }

/* line 74, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-control-file:valid ~ .valid-feedback,
.was-validated .form-control-file:valid ~ .valid-tooltip, .form-control-file.is-valid ~ .valid-feedback,
.form-control-file.is-valid ~ .valid-tooltip {
  display: block; }

/* line 84, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #24b47e; }

/* line 88, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip {
  display: block; }

/* line 98, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
  color: #24b47e; }
  /* line 101, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
    background-color: #74e3ba; }

/* line 106, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:valid ~ .valid-feedback,
.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,
.custom-control-input.is-valid ~ .valid-tooltip {
  display: block; }

/* line 112, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
  background-color: #35d79a; }

/* line 118, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(36, 180, 126, 0.25);
          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(36, 180, 126, 0.25); }

/* line 129, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
  border-color: #24b47e; }
  /* line 132, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {
    border-color: inherit; }

/* line 135, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-file-input:valid ~ .valid-feedback,
.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,
.custom-file-input.is-valid ~ .valid-tooltip {
  display: block; }

/* line 141, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.25);
          box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.25); }

/* line 30, node_modules/bootstrap/scss/mixins/_forms.scss */
.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #bd081c; }

/* line 38, node_modules/bootstrap/scss/mixins/_forms.scss */
.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1;
  color: #fff;
  background-color: rgba(189, 8, 28, 0.8);
  border-radius: .2rem; }

/* line 55, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated
.custom-select:invalid,
.custom-select.is-invalid {
  border-color: #bd081c; }
  /* line 59, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated
  .custom-select:invalid:focus,
  .custom-select.is-invalid:focus {
    border-color: #bd081c;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
  /* line 64, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .form-control:invalid ~ .invalid-feedback,
  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,
  .form-control.is-invalid ~ .invalid-tooltip, .was-validated
  .custom-select:invalid ~ .invalid-feedback,
  .was-validated
  .custom-select:invalid ~ .invalid-tooltip,
  .custom-select.is-invalid ~ .invalid-feedback,
  .custom-select.is-invalid ~ .invalid-tooltip {
    display: block; }

/* line 74, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-control-file:invalid ~ .invalid-feedback,
.was-validated .form-control-file:invalid ~ .invalid-tooltip, .form-control-file.is-invalid ~ .invalid-feedback,
.form-control-file.is-invalid ~ .invalid-tooltip {
  display: block; }

/* line 84, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #bd081c; }

/* line 88, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip {
  display: block; }

/* line 98, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
  color: #bd081c; }
  /* line 101, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
    background-color: #f74d60; }

/* line 106, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:invalid ~ .invalid-feedback,
.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,
.custom-control-input.is-invalid ~ .invalid-tooltip {
  display: block; }

/* line 112, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
  background-color: #ee0a23; }

/* line 118, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }

/* line 129, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
  border-color: #bd081c; }
  /* line 132, node_modules/bootstrap/scss/mixins/_forms.scss */
  .was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {
    border-color: inherit; }

/* line 135, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-file-input:invalid ~ .invalid-feedback,
.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,
.custom-file-input.is-invalid ~ .invalid-tooltip {
  display: block; }

/* line 141, node_modules/bootstrap/scss/mixins/_forms.scss */
.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
          box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }

/* line 264, node_modules/bootstrap/scss/_forms.scss */
.form-inline {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  /* line 272, node_modules/bootstrap/scss/_forms.scss */
  .form-inline .form-check {
    width: 100%; }
  @media (min-width: 576px) {
    /* line 278, node_modules/bootstrap/scss/_forms.scss */
    .form-inline label {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      margin-bottom: 0; }
    /* line 286, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .form-group {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
          -ms-flex: 0 0 auto;
              flex: 0 0 auto;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
              flex-flow: row wrap;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      margin-bottom: 0; }
    /* line 295, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .form-control {
      display: inline-block;
      width: auto;
      vertical-align: middle; }
    /* line 302, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .form-control-plaintext {
      display: inline-block; }
    /* line 306, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .input-group,
    .form-inline .custom-select {
      width: auto; }
    /* line 313, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .form-check {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      width: auto;
      padding-left: 0; }
    /* line 320, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .form-check-input {
      position: relative;
      margin-top: 0;
      margin-right: 0.25rem;
      margin-left: 0; }
    /* line 327, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .custom-control {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center; }
    /* line 331, node_modules/bootstrap/scss/_forms.scss */
    .form-inline .custom-control-label {
      margin-bottom: 0; } }

/* line 7, node_modules/bootstrap/scss/_buttons.scss */
.btn {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }
  @media screen and (prefers-reduced-motion: reduce) {
    /* line 7, node_modules/bootstrap/scss/_buttons.scss */
    .btn {
      -webkit-transition: none;
      transition: none; } }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn:hover, .btn:focus {
    text-decoration: none; }
  /* line 23, node_modules/bootstrap/scss/_buttons.scss */
  .btn:focus, .btn.focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
  /* line 30, node_modules/bootstrap/scss/_buttons.scss */
  .btn.disabled, .btn:disabled {
    opacity: 0.65; }
  /* line 37, node_modules/bootstrap/scss/_buttons.scss */
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer; }
  /* line 41, node_modules/bootstrap/scss/_buttons.scss */
  .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
    background-image: none; }

/* line 53, node_modules/bootstrap/scss/_buttons.scss */
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none; }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-primary {
  color: #fff;
  background-color: #bd081c;
  border-color: #bd081c; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-primary:hover {
    color: #fff;
    background-color: #980617;
    border-color: #8c0615; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-primary:focus, .btn-primary.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-primary.disabled, .btn-primary:disabled {
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #8c0615;
    border-color: #800513; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,
    .show > .btn-primary.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-secondary:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-secondary:focus, .btn-secondary.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-secondary.disabled, .btn-secondary:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
    .show > .btn-secondary.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-success {
  color: #fff;
  background-color: #24b47e;
  border-color: #24b47e; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-success:hover {
    color: #fff;
    background-color: #1e9468;
    border-color: #1c8a60; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-success:focus, .btn-success.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-success.disabled, .btn-success:disabled {
    color: #fff;
    background-color: #24b47e;
    border-color: #24b47e; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,
  .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #1c8a60;
    border-color: #197f59; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,
    .show > .btn-success.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-info {
  color: #212529;
  background-color: #46f8ff;
  border-color: #46f8ff; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-info:hover {
    color: #212529;
    background-color: #20f7ff;
    border-color: #13f6ff; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-info:focus, .btn-info.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-info.disabled, .btn-info:disabled {
    color: #212529;
    background-color: #46f8ff;
    border-color: #46f8ff; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    color: #212529;
    background-color: #13f6ff;
    border-color: #06f6ff; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,
    .show > .btn-info.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-warning:hover {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-warning:focus, .btn-warning.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-warning.disabled, .btn-warning:disabled {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,
  .show > .btn-warning.dropdown-toggle {
    color: #212529;
    background-color: #d39e00;
    border-color: #c69500; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,
    .show > .btn-warning.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-danger {
  color: #fff;
  background-color: #bd081c;
  border-color: #bd081c; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-danger:hover {
    color: #fff;
    background-color: #980617;
    border-color: #8c0615; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-danger:focus, .btn-danger.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-danger.disabled, .btn-danger:disabled {
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,
  .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #8c0615;
    border-color: #800513; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,
    .show > .btn-danger.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-light {
  color: #212529;
  background-color: #fff;
  border-color: #fff; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-light:hover {
    color: #212529;
    background-color: #ececec;
    border-color: #e6e6e6; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-light:focus, .btn-light.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-light.disabled, .btn-light:disabled {
    color: #212529;
    background-color: #fff;
    border-color: #fff; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,
  .show > .btn-light.dropdown-toggle {
    color: #212529;
    background-color: #e6e6e6;
    border-color: #dfdfdf; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,
    .show > .btn-light.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-dark:focus, .btn-dark.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-dark.disabled, .btn-dark:disabled {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,
  .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,
    .show > .btn-dark.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-purple {
  color: #fff;
  background-color: #6f42c1;
  border-color: #6f42c1; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-purple:hover {
    color: #fff;
    background-color: #5e37a6;
    border-color: #59339d; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-purple:focus, .btn-purple.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-purple.disabled, .btn-purple:disabled {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-purple:not(:disabled):not(.disabled):active, .btn-purple:not(:disabled):not(.disabled).active,
  .show > .btn-purple.dropdown-toggle {
    color: #fff;
    background-color: #59339d;
    border-color: #533093; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-purple:not(:disabled):not(.disabled):active:focus, .btn-purple:not(:disabled):not(.disabled).active:focus,
    .show > .btn-purple.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-purplepink {
  color: #fff;
  background-color: #9742c1;
  border-color: #9742c1; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-purplepink:hover {
    color: #fff;
    background-color: #8137a6;
    border-color: #7a339d; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-purplepink:focus, .btn-purplepink.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-purplepink.disabled, .btn-purplepink:disabled {
    color: #fff;
    background-color: #9742c1;
    border-color: #9742c1; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-purplepink:not(:disabled):not(.disabled):active, .btn-purplepink:not(:disabled):not(.disabled).active,
  .show > .btn-purplepink.dropdown-toggle {
    color: #fff;
    background-color: #7a339d;
    border-color: #723093; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-purplepink:not(:disabled):not(.disabled):active:focus, .btn-purplepink:not(:disabled):not(.disabled).active:focus,
    .show > .btn-purplepink.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-indigo {
  color: #fff;
  background-color: #6610f2;
  border-color: #6610f2; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-indigo:hover {
    color: #fff;
    background-color: #560bd0;
    border-color: #510bc4; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-indigo:focus, .btn-indigo.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-indigo.disabled, .btn-indigo:disabled {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-indigo:not(:disabled):not(.disabled):active, .btn-indigo:not(:disabled):not(.disabled).active,
  .show > .btn-indigo.dropdown-toggle {
    color: #fff;
    background-color: #510bc4;
    border-color: #4c0ab8; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-indigo:not(:disabled):not(.disabled):active:focus, .btn-indigo:not(:disabled):not(.disabled).active:focus,
    .show > .btn-indigo.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-pink {
  color: #fff;
  background-color: #e83e8c;
  border-color: #e83e8c; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-pink:hover {
    color: #fff;
    background-color: #e41c78;
    border-color: #d91a72; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-pink:focus, .btn-pink.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-pink.disabled, .btn-pink:disabled {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-pink:not(:disabled):not(.disabled):active, .btn-pink:not(:disabled):not(.disabled).active,
  .show > .btn-pink.dropdown-toggle {
    color: #fff;
    background-color: #d91a72;
    border-color: #ce196c; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-pink:not(:disabled):not(.disabled):active:focus, .btn-pink:not(:disabled):not(.disabled).active:focus,
    .show > .btn-pink.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-cyan {
  color: #212529;
  background-color: #46f8ff;
  border-color: #46f8ff; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-cyan:hover {
    color: #212529;
    background-color: #20f7ff;
    border-color: #13f6ff; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-cyan:focus, .btn-cyan.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-cyan.disabled, .btn-cyan:disabled {
    color: #212529;
    background-color: #46f8ff;
    border-color: #46f8ff; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-cyan:not(:disabled):not(.disabled):active, .btn-cyan:not(:disabled):not(.disabled).active,
  .show > .btn-cyan.dropdown-toggle {
    color: #212529;
    background-color: #13f6ff;
    border-color: #06f6ff; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-cyan:not(:disabled):not(.disabled):active:focus, .btn-cyan:not(:disabled):not(.disabled).active:focus,
    .show > .btn-cyan.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-lightgreen {
  color: #212529;
  background-color: #7eec9d;
  border-color: #7eec9d; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-lightgreen:hover {
    color: #212529;
    background-color: #5de784;
    border-color: #52e57b; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-lightgreen:focus, .btn-lightgreen.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-lightgreen.disabled, .btn-lightgreen:disabled {
    color: #212529;
    background-color: #7eec9d;
    border-color: #7eec9d; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-lightgreen:not(:disabled):not(.disabled):active, .btn-lightgreen:not(:disabled):not(.disabled).active,
  .show > .btn-lightgreen.dropdown-toggle {
    color: #212529;
    background-color: #52e57b;
    border-color: #46e473; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-lightgreen:not(:disabled):not(.disabled):active:focus, .btn-lightgreen:not(:disabled):not(.disabled).active:focus,
    .show > .btn-lightgreen.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-graylight {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-graylight:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-graylight:focus, .btn-graylight.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-graylight.disabled, .btn-graylight:disabled {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-graylight:not(:disabled):not(.disabled):active, .btn-graylight:not(:disabled):not(.disabled).active,
  .show > .btn-graylight.dropdown-toggle {
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-graylight:not(:disabled):not(.disabled):active:focus, .btn-graylight:not(:disabled):not(.disabled).active:focus,
    .show > .btn-graylight.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }

/* line 64, node_modules/bootstrap/scss/_buttons.scss */
.btn-gray200 {
  color: #212529;
  background-color: #eee;
  border-color: #eee; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-gray200:hover {
    color: #212529;
    background-color: #dbdbdb;
    border-color: #d5d5d5; }
  /* line 18, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-gray200:focus, .btn-gray200.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5); }
  /* line 29, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-gray200.disabled, .btn-gray200:disabled {
    color: #212529;
    background-color: #eee;
    border-color: #eee; }
  /* line 36, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-gray200:not(:disabled):not(.disabled):active, .btn-gray200:not(:disabled):not(.disabled).active,
  .show > .btn-gray200.dropdown-toggle {
    color: #212529;
    background-color: #d5d5d5;
    border-color: #cecece; }
    /* line 46, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-gray200:not(:disabled):not(.disabled):active:focus, .btn-gray200:not(:disabled):not(.disabled).active:focus,
    .show > .btn-gray200.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-primary {
  color: #bd081c;
  background-color: transparent;
  background-image: none;
  border-color: #bd081c; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-primary:focus, .btn-outline-primary.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-primary.disabled, .btn-outline-primary:disabled {
    color: #bd081c;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-primary.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-secondary {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  border-color: #6c757d; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-secondary:focus, .btn-outline-secondary.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
    color: #6c757d;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-secondary.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-success {
  color: #24b47e;
  background-color: transparent;
  background-image: none;
  border-color: #24b47e; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-success:hover {
    color: #fff;
    background-color: #24b47e;
    border-color: #24b47e; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-success:focus, .btn-outline-success.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-success.disabled, .btn-outline-success:disabled {
    color: #24b47e;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,
  .show > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #24b47e;
    border-color: #24b47e; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-success.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(36, 180, 126, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-info {
  color: #46f8ff;
  background-color: transparent;
  background-image: none;
  border-color: #46f8ff; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-info:hover {
    color: #212529;
    background-color: #46f8ff;
    border-color: #46f8ff; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-info:focus, .btn-outline-info.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-info.disabled, .btn-outline-info:disabled {
    color: #46f8ff;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,
  .show > .btn-outline-info.dropdown-toggle {
    color: #212529;
    background-color: #46f8ff;
    border-color: #46f8ff; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-info.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-warning {
  color: #ffc107;
  background-color: transparent;
  background-image: none;
  border-color: #ffc107; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-warning:hover {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-warning:focus, .btn-outline-warning.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-warning.disabled, .btn-outline-warning:disabled {
    color: #ffc107;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,
  .show > .btn-outline-warning.dropdown-toggle {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-warning.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-danger {
  color: #bd081c;
  background-color: transparent;
  background-image: none;
  border-color: #bd081c; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-danger:focus, .btn-outline-danger.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-danger.disabled, .btn-outline-danger:disabled {
    color: #bd081c;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,
  .show > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-danger.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-light {
  color: #fff;
  background-color: transparent;
  background-image: none;
  border-color: #fff; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-light:hover {
    color: #212529;
    background-color: #fff;
    border-color: #fff; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-light:focus, .btn-outline-light.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-light.disabled, .btn-outline-light:disabled {
    color: #fff;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,
  .show > .btn-outline-light.dropdown-toggle {
    color: #212529;
    background-color: #fff;
    border-color: #fff; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-light.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-dark {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  border-color: #343a40; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-dark:hover {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-dark:focus, .btn-outline-dark.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-dark.disabled, .btn-outline-dark:disabled {
    color: #343a40;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,
  .show > .btn-outline-dark.dropdown-toggle {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-dark.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-purple {
  color: #6f42c1;
  background-color: transparent;
  background-image: none;
  border-color: #6f42c1; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purple:hover {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purple:focus, .btn-outline-purple.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purple.disabled, .btn-outline-purple:disabled {
    color: #6f42c1;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purple:not(:disabled):not(.disabled):active, .btn-outline-purple:not(:disabled):not(.disabled).active,
  .show > .btn-outline-purple.dropdown-toggle {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-purple:not(:disabled):not(.disabled):active:focus, .btn-outline-purple:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-purple.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(111, 66, 193, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-purplepink {
  color: #9742c1;
  background-color: transparent;
  background-image: none;
  border-color: #9742c1; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purplepink:hover {
    color: #fff;
    background-color: #9742c1;
    border-color: #9742c1; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purplepink:focus, .btn-outline-purplepink.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purplepink.disabled, .btn-outline-purplepink:disabled {
    color: #9742c1;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-purplepink:not(:disabled):not(.disabled):active, .btn-outline-purplepink:not(:disabled):not(.disabled).active,
  .show > .btn-outline-purplepink.dropdown-toggle {
    color: #fff;
    background-color: #9742c1;
    border-color: #9742c1; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-purplepink:not(:disabled):not(.disabled):active:focus, .btn-outline-purplepink:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-purplepink.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(151, 66, 193, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-indigo {
  color: #6610f2;
  background-color: transparent;
  background-image: none;
  border-color: #6610f2; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-indigo:hover {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-indigo:focus, .btn-outline-indigo.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-indigo.disabled, .btn-outline-indigo:disabled {
    color: #6610f2;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-indigo:not(:disabled):not(.disabled):active, .btn-outline-indigo:not(:disabled):not(.disabled).active,
  .show > .btn-outline-indigo.dropdown-toggle {
    color: #fff;
    background-color: #6610f2;
    border-color: #6610f2; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-indigo:not(:disabled):not(.disabled):active:focus, .btn-outline-indigo:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-indigo.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(102, 16, 242, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-pink {
  color: #e83e8c;
  background-color: transparent;
  background-image: none;
  border-color: #e83e8c; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-pink:hover {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-pink:focus, .btn-outline-pink.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-pink.disabled, .btn-outline-pink:disabled {
    color: #e83e8c;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-pink:not(:disabled):not(.disabled):active, .btn-outline-pink:not(:disabled):not(.disabled).active,
  .show > .btn-outline-pink.dropdown-toggle {
    color: #fff;
    background-color: #e83e8c;
    border-color: #e83e8c; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-pink:not(:disabled):not(.disabled):active:focus, .btn-outline-pink:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-pink.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-cyan {
  color: #46f8ff;
  background-color: transparent;
  background-image: none;
  border-color: #46f8ff; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-cyan:hover {
    color: #212529;
    background-color: #46f8ff;
    border-color: #46f8ff; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-cyan:focus, .btn-outline-cyan.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-cyan.disabled, .btn-outline-cyan:disabled {
    color: #46f8ff;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-cyan:not(:disabled):not(.disabled):active, .btn-outline-cyan:not(:disabled):not(.disabled).active,
  .show > .btn-outline-cyan.dropdown-toggle {
    color: #212529;
    background-color: #46f8ff;
    border-color: #46f8ff; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-cyan:not(:disabled):not(.disabled):active:focus, .btn-outline-cyan:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-cyan.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(70, 248, 255, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-lightgreen {
  color: #7eec9d;
  background-color: transparent;
  background-image: none;
  border-color: #7eec9d; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-lightgreen:hover {
    color: #212529;
    background-color: #7eec9d;
    border-color: #7eec9d; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-lightgreen:focus, .btn-outline-lightgreen.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-lightgreen.disabled, .btn-outline-lightgreen:disabled {
    color: #7eec9d;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-lightgreen:not(:disabled):not(.disabled):active, .btn-outline-lightgreen:not(:disabled):not(.disabled).active,
  .show > .btn-outline-lightgreen.dropdown-toggle {
    color: #212529;
    background-color: #7eec9d;
    border-color: #7eec9d; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-lightgreen:not(:disabled):not(.disabled):active:focus, .btn-outline-lightgreen:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-lightgreen.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(126, 236, 157, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-graylight {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  border-color: #f8f9fa; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-graylight:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-graylight:focus, .btn-outline-graylight.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-graylight.disabled, .btn-outline-graylight:disabled {
    color: #f8f9fa;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-graylight:not(:disabled):not(.disabled):active, .btn-outline-graylight:not(:disabled):not(.disabled).active,
  .show > .btn-outline-graylight.dropdown-toggle {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-graylight:not(:disabled):not(.disabled):active:focus, .btn-outline-graylight:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-graylight.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }

/* line 70, node_modules/bootstrap/scss/_buttons.scss */
.btn-outline-gray200 {
  color: #eee;
  background-color: transparent;
  background-image: none;
  border-color: #eee; }
  /* line 63, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-gray200:hover {
    color: #212529;
    background-color: #eee;
    border-color: #eee; }
  /* line 69, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-gray200:focus, .btn-outline-gray200.focus {
    -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
            box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5); }
  /* line 74, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-gray200.disabled, .btn-outline-gray200:disabled {
    color: #eee;
    background-color: transparent; }
  /* line 80, node_modules/bootstrap/scss/mixins/_buttons.scss */
  .btn-outline-gray200:not(:disabled):not(.disabled):active, .btn-outline-gray200:not(:disabled):not(.disabled).active,
  .show > .btn-outline-gray200.dropdown-toggle {
    color: #212529;
    background-color: #eee;
    border-color: #eee; }
    /* line 87, node_modules/bootstrap/scss/mixins/_buttons.scss */
    .btn-outline-gray200:not(:disabled):not(.disabled):active:focus, .btn-outline-gray200:not(:disabled):not(.disabled).active:focus,
    .show > .btn-outline-gray200.dropdown-toggle:focus {
      -webkit-box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5);
              box-shadow: 0 0 0 0.2rem rgba(238, 238, 238, 0.5); }

/* line 81, node_modules/bootstrap/scss/_buttons.scss */
.btn-link {
  font-weight: 400;
  color: #bd081c;
  background-color: transparent; }
  /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
  .btn-link:hover {
    color: #740511;
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent; }
  /* line 93, node_modules/bootstrap/scss/_buttons.scss */
  .btn-link:focus, .btn-link.focus {
    text-decoration: underline;
    border-color: transparent;
    -webkit-box-shadow: none;
            box-shadow: none; }
  /* line 100, node_modules/bootstrap/scss/_buttons.scss */
  .btn-link:disabled, .btn-link.disabled {
    color: #6c757d;
    pointer-events: none; }

/* line 114, node_modules/bootstrap/scss/_buttons.scss */
.btn-lg, .btn-group-lg > .btn {
  padding: 0.9rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem; }

/* line 118, node_modules/bootstrap/scss/_buttons.scss */
.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem; }

/* line 127, node_modules/bootstrap/scss/_buttons.scss */
.btn-block {
  display: block;
  width: 100%; }
  /* line 132, node_modules/bootstrap/scss/_buttons.scss */
  .btn-block + .btn-block {
    margin-top: 0.5rem; }

/* line 141, node_modules/bootstrap/scss/_buttons.scss */
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%; }

/* line 3, node_modules/bootstrap/scss/_transitions.scss */
.fade {
  -webkit-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear; }
  @media screen and (prefers-reduced-motion: reduce) {
    /* line 3, node_modules/bootstrap/scss/_transitions.scss */
    .fade {
      -webkit-transition: none;
      transition: none; } }
  /* line 6, node_modules/bootstrap/scss/_transitions.scss */
  .fade:not(.show) {
    opacity: 0; }

/* line 12, node_modules/bootstrap/scss/_transitions.scss */
.collapse:not(.show) {
  display: none; }

/* line 17, node_modules/bootstrap/scss/_transitions.scss */
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  transition: height 0.35s ease; }
  @media screen and (prefers-reduced-motion: reduce) {
    /* line 17, node_modules/bootstrap/scss/_transitions.scss */
    .collapsing {
      -webkit-transition: none;
      transition: none; } }

/* line 2, node_modules/bootstrap/scss/_dropdown.scss */
.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative; }

/* line 30, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent; }

/* line 62, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropdown-toggle:empty::after {
  margin-left: 0; }

/* line 15, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #343a40;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 0.25rem; }

/* line 36, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-menu-right {
  right: 0;
  left: auto; }

/* line 44, node_modules/bootstrap/scss/_dropdown.scss */
.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem; }

/* line 30, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropup .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent; }

/* line 62, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropup .dropdown-toggle:empty::after {
  margin-left: 0; }

/* line 57, node_modules/bootstrap/scss/_dropdown.scss */
.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem; }

/* line 30, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropright .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid; }

/* line 62, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropright .dropdown-toggle:empty::after {
  margin-left: 0; }

/* line 67, node_modules/bootstrap/scss/_dropdown.scss */
.dropright .dropdown-toggle::after {
  vertical-align: 0; }

/* line 74, node_modules/bootstrap/scss/_dropdown.scss */
.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem; }

/* line 30, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropleft .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: ""; }

/* line 47, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropleft .dropdown-toggle::after {
  display: none; }

/* line 51, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropleft .dropdown-toggle::before {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent; }

/* line 62, node_modules/bootstrap/scss/mixins/_caret.scss */
.dropleft .dropdown-toggle:empty::after {
  margin-left: 0; }

/* line 84, node_modules/bootstrap/scss/_dropdown.scss */
.dropleft .dropdown-toggle::before {
  vertical-align: 0; }

/* line 93, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto; }

/* line 104, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #eee; }

/* line 111, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.3);
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .dropdown-item:hover, .dropdown-item:focus {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa; }
  /* line 129, node_modules/bootstrap/scss/_dropdown.scss */
  .dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #bd081c; }
  /* line 136, node_modules/bootstrap/scss/_dropdown.scss */
  .dropdown-item.disabled, .dropdown-item:disabled {
    color: #6c757d;
    background-color: transparent; }

/* line 147, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-menu.show {
  display: block; }

/* line 152, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap; }

/* line 162, node_modules/bootstrap/scss/_dropdown.scss */
.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: rgba(0, 0, 0, 0.3); }

/* line 4, node_modules/bootstrap/scss/_button-group.scss */
.btn-group,
.btn-group-vertical {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle; }
  /* line 10, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto; }
    /* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
    .btn-group > .btn:hover,
    .btn-group-vertical > .btn:hover {
      z-index: 1; }
    /* line 19, node_modules/bootstrap/scss/_button-group.scss */
    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
    .btn-group-vertical > .btn:focus,
    .btn-group-vertical > .btn:active,
    .btn-group-vertical > .btn.active {
      z-index: 1; }
  /* line 27, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group .btn + .btn,
  .btn-group .btn + .btn-group,
  .btn-group .btn-group + .btn,
  .btn-group .btn-group + .btn-group,
  .btn-group-vertical .btn + .btn,
  .btn-group-vertical .btn + .btn-group,
  .btn-group-vertical .btn-group + .btn,
  .btn-group-vertical .btn-group + .btn-group {
    margin-left: -1px; }

/* line 36, node_modules/bootstrap/scss/_button-group.scss */
.btn-toolbar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start; }
  /* line 41, node_modules/bootstrap/scss/_button-group.scss */
  .btn-toolbar .input-group {
    width: auto; }

/* line 47, node_modules/bootstrap/scss/_button-group.scss */
.btn-group > .btn:first-child {
  margin-left: 0; }

/* line 52, node_modules/bootstrap/scss/_button-group.scss */
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; }

/* line 57, node_modules/bootstrap/scss/_button-group.scss */
.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

/* line 75, node_modules/bootstrap/scss/_button-group.scss */
.dropdown-toggle-split {
  padding-right: 1.125rem;
  padding-left: 1.125rem; }
  /* line 79, node_modules/bootstrap/scss/_button-group.scss */
  .dropdown-toggle-split::after,
  .dropup .dropdown-toggle-split::after,
  .dropright .dropdown-toggle-split::after {
    margin-left: 0; }
  /* line 85, node_modules/bootstrap/scss/_button-group.scss */
  .dropleft .dropdown-toggle-split::before {
    margin-right: 0; }

/* line 90, node_modules/bootstrap/scss/_button-group.scss */
.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem; }

/* line 95, node_modules/bootstrap/scss/_button-group.scss */
.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 1.125rem;
  padding-left: 1.125rem; }

/* line 117, node_modules/bootstrap/scss/_button-group.scss */
.btn-group-vertical {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }
  /* line 122, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group-vertical .btn,
  .btn-group-vertical .btn-group {
    width: 100%; }
  /* line 127, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group-vertical > .btn + .btn,
  .btn-group-vertical > .btn + .btn-group,
  .btn-group-vertical > .btn-group + .btn,
  .btn-group-vertical > .btn-group + .btn-group {
    margin-top: -1px;
    margin-left: 0; }
  /* line 136, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0; }
  /* line 141, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0; }

/* line 161, node_modules/bootstrap/scss/_button-group.scss */
.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0; }
  /* line 165, node_modules/bootstrap/scss/_button-group.scss */
  .btn-group-toggle > .btn input[type="radio"],
  .btn-group-toggle > .btn input[type="checkbox"],
  .btn-group-toggle > .btn-group > .btn input[type="radio"],
  .btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none; }

/* line 7, node_modules/bootstrap/scss/_input-group.scss */
.input-group {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  width: 100%; }
  /* line 14, node_modules/bootstrap/scss/_input-group.scss */
  .input-group > .form-control,
  .input-group > .custom-select,
  .input-group > .custom-file {
    position: relative;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0; }
    /* line 25, node_modules/bootstrap/scss/_input-group.scss */
    .input-group > .form-control:focus,
    .input-group > .custom-select:focus,
    .input-group > .custom-file:focus {
      z-index: 3; }
    /* line 29, node_modules/bootstrap/scss/_input-group.scss */
    .input-group > .form-control + .form-control,
    .input-group > .form-control + .custom-select,
    .input-group > .form-control + .custom-file,
    .input-group > .custom-select + .form-control,
    .input-group > .custom-select + .custom-select,
    .input-group > .custom-select + .custom-file,
    .input-group > .custom-file + .form-control,
    .input-group > .custom-file + .custom-select,
    .input-group > .custom-file + .custom-file {
      margin-left: -1px; }
  /* line 38, node_modules/bootstrap/scss/_input-group.scss */
  .input-group > .form-control:not(:last-child),
  .input-group > .custom-select:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0; }
  /* line 39, node_modules/bootstrap/scss/_input-group.scss */
  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0; }
  /* line 44, node_modules/bootstrap/scss/_input-group.scss */
  .input-group > .custom-file {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    /* line 48, node_modules/bootstrap/scss/_input-group.scss */
    .input-group > .custom-file:not(:last-child) .custom-file-label,
    .input-group > .custom-file:not(:last-child) .custom-file-label::after {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0; }
    /* line 50, node_modules/bootstrap/scss/_input-group.scss */
    .input-group > .custom-file:not(:first-child) .custom-file-label {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0; }

/* line 61, node_modules/bootstrap/scss/_input-group.scss */
.input-group-prepend,
.input-group-append {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  /* line 68, node_modules/bootstrap/scss/_input-group.scss */
  .input-group-prepend .btn,
  .input-group-append .btn {
    position: relative;
    z-index: 2; }
  /* line 73, node_modules/bootstrap/scss/_input-group.scss */
  .input-group-prepend .btn + .btn,
  .input-group-prepend .btn + .input-group-text,
  .input-group-prepend .input-group-text + .input-group-text,
  .input-group-prepend .input-group-text + .btn,
  .input-group-append .btn + .btn,
  .input-group-append .btn + .input-group-text,
  .input-group-append .input-group-text + .input-group-text,
  .input-group-append .input-group-text + .btn {
    margin-left: -1px; }

/* line 81, node_modules/bootstrap/scss/_input-group.scss */
.input-group-prepend {
  margin-right: -1px; }

/* line 82, node_modules/bootstrap/scss/_input-group.scss */
.input-group-append {
  margin-left: -1px; }

/* line 90, node_modules/bootstrap/scss/_input-group.scss */
.input-group-text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #eee;
  border: 1px solid #ced4da;
  border-radius: 0.25rem; }
  /* line 106, node_modules/bootstrap/scss/_input-group.scss */
  .input-group-text input[type="radio"],
  .input-group-text input[type="checkbox"] {
    margin-top: 0; }

/* line 142, node_modules/bootstrap/scss/_input-group.scss */
.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; }

/* line 151, node_modules/bootstrap/scss/_input-group.scss */
.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0; }

/* line 10, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem; }

/* line 17, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-control-inline {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin-right: 1rem; }

/* line 22, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0; }
  /* line 27, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    background-color: #bd081c; }
  /* line 33, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-control-input:focus ~ .custom-control-label::before {
    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
  /* line 38, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-control-input:active ~ .custom-control-label::before {
    color: #fff;
    background-color: #fa7e8c; }
  /* line 45, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-control-input:disabled ~ .custom-control-label {
    color: #6c757d; }
    /* line 48, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-control-input:disabled ~ .custom-control-label::before {
      background-color: #eee; }

/* line 59, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-control-label {
  position: relative;
  margin-bottom: 0; }
  /* line 64, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-control-label::before {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    content: "";
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background-color: #dee2e6; }
  /* line 79, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-control-label::after {
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%; }

/* line 99, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem; }

/* line 104, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #bd081c; }

/* line 107, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E"); }

/* line 113, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
  background-color: #bd081c; }

/* line 117, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E"); }

/* line 123, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(189, 8, 28, 0.5); }

/* line 126, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
  background-color: rgba(189, 8, 28, 0.5); }

/* line 137, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-radio .custom-control-label::before {
  border-radius: 50%; }

/* line 142, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #bd081c; }

/* line 145, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E"); }

/* line 151, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(189, 8, 28, 0.5); }

/* line 164, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
  /* line 182, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-select:focus {
    border-color: #f74d60;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(247, 77, 96, 0.5);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(247, 77, 96, 0.5); }
    /* line 187, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-select:focus::-ms-value {
      color: #495057;
      background-color: #fff; }
  /* line 198, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-select[multiple], .custom-select[size]:not([size="1"]) {
    height: auto;
    padding-right: 0.75rem;
    background-image: none; }
  /* line 205, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-select:disabled {
    color: #6c757d;
    background-color: #eee; }
  /* line 211, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-select::-ms-expand {
    opacity: 0; }

/* line 216, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-select-sm {
  height: calc(1.8125rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 75%; }

/* line 223, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-select-lg {
  height: calc(2.875rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 125%; }

/* line 235, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin-bottom: 0; }

/* line 243, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin: 0;
  opacity: 0; }
  /* line 251, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-file-input:focus ~ .custom-file-label {
    border-color: #f74d60;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
    /* line 255, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-file-input:focus ~ .custom-file-label::after {
      border-color: #f74d60; }
  /* line 261, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "Browse"; }

/* line 267, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem; }
  /* line 282, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-file-label::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    display: block;
    height: 2.25rem;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057;
    content: "Browse";
    background-color: #eee;
    border-left: 1px solid #ced4da;
    border-radius: 0 0.25rem 0.25rem 0; }

/* line 306, node_modules/bootstrap/scss/_custom-forms.scss */
.custom-range {
  width: 100%;
  padding-left: 0;
  background-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
  /* line 312, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range:focus {
    outline: none; }
  /* line 316, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-moz-focus-outer {
    border: 0; }
  /* line 320, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #bd081c;
    border: 0;
    border-radius: 1rem;
    -webkit-appearance: none;
            appearance: none; }
    /* line 330, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-range::-webkit-slider-thumb:focus {
      outline: none;
      -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
              box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
    /* line 335, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-range::-webkit-slider-thumb:active {
      background-color: #fa7e8c; }
  /* line 340, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem; }
  /* line 351, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #bd081c;
    border: 0;
    border-radius: 1rem;
    -moz-appearance: none;
         appearance: none; }
    /* line 360, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-range::-moz-range-thumb:focus {
      outline: none;
      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
    /* line 365, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-range::-moz-range-thumb:active {
      background-color: #fa7e8c; }
  /* line 370, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dee2e6;
    border-color: transparent;
    border-radius: 1rem; }
  /* line 381, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-ms-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #bd081c;
    border: 0;
    border-radius: 1rem;
    appearance: none; }
    /* line 390, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-range::-ms-thumb:focus {
      outline: none;
      box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
    /* line 395, node_modules/bootstrap/scss/_custom-forms.scss */
    .custom-range::-ms-thumb:active {
      background-color: #fa7e8c; }
  /* line 400, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-ms-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    border-width: 0.5rem; }
  /* line 411, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-ms-fill-lower {
    background-color: #dee2e6;
    border-radius: 1rem; }
  /* line 416, node_modules/bootstrap/scss/_custom-forms.scss */
  .custom-range::-ms-fill-upper {
    margin-right: 15px;
    background-color: #dee2e6;
    border-radius: 1rem; }

/* line 6, node_modules/bootstrap/scss/_nav.scss */
.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none; }

/* line 14, node_modules/bootstrap/scss/_nav.scss */
.nav-link {
  display: block;
  padding: 0.5rem 1rem; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .nav-link:hover, .nav-link:focus {
    text-decoration: none; }
  /* line 23, node_modules/bootstrap/scss/_nav.scss */
  .nav-link.disabled {
    color: #6c757d; }

/* line 32, node_modules/bootstrap/scss/_nav.scss */
.nav-tabs {
  border-bottom: 1px solid #dee2e6; }
  /* line 35, node_modules/bootstrap/scss/_nav.scss */
  .nav-tabs .nav-item {
    margin-bottom: -1px; }
  /* line 39, node_modules/bootstrap/scss/_nav.scss */
  .nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem; }
    /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
      border-color: #eee #eee #dee2e6; }
    /* line 47, node_modules/bootstrap/scss/_nav.scss */
    .nav-tabs .nav-link.disabled {
      color: #6c757d;
      background-color: transparent;
      border-color: transparent; }
  /* line 54, node_modules/bootstrap/scss/_nav.scss */
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff; }
  /* line 61, node_modules/bootstrap/scss/_nav.scss */
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0; }

/* line 75, node_modules/bootstrap/scss/_nav.scss */
.nav-pills .nav-link {
  border-radius: 0.25rem; }

/* line 79, node_modules/bootstrap/scss/_nav.scss */
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #bd081c; }

/* line 92, node_modules/bootstrap/scss/_nav.scss */
.nav-fill .nav-item {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  text-align: center; }

/* line 99, node_modules/bootstrap/scss/_nav.scss */
.nav-justified .nav-item {
  -ms-flex-preferred-size: 0;
      flex-basis: 0;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  text-align: center; }

/* line 112, node_modules/bootstrap/scss/_nav.scss */
.tab-content > .tab-pane {
  display: none; }

/* line 115, node_modules/bootstrap/scss/_nav.scss */
.tab-content > .active {
  display: block; }

/* line 18, node_modules/bootstrap/scss/_navbar.scss */
.navbar {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem 1rem; }
  /* line 28, node_modules/bootstrap/scss/_navbar.scss */
  .navbar > .container,
  .navbar > .container-fluid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between; }

/* line 42, node_modules/bootstrap/scss/_navbar.scss */
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .navbar-brand:hover, .navbar-brand:focus {
    text-decoration: none; }

/* line 61, node_modules/bootstrap/scss/_navbar.scss */
.navbar-nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none; }
  /* line 68, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0; }
  /* line 73, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-nav .dropdown-menu {
    position: static;
    float: none; }

/* line 84, node_modules/bootstrap/scss/_navbar.scss */
.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem; }

/* line 99, node_modules/bootstrap/scss/_navbar.scss */
.navbar-collapse {
  -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

/* line 108, node_modules/bootstrap/scss/_navbar.scss */
.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .navbar-toggler:hover, .navbar-toggler:focus {
    text-decoration: none; }
  /* line 121, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer; }

/* line 128, node_modules/bootstrap/scss/_navbar.scss */
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%; }

@media (max-width: 575.98px) {
  /* line 147, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid {
    padding-right: 0;
    padding-left: 0; } }

@media (min-width: 576px) {
  /* line 145, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-sm {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
    /* line 158, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-sm .navbar-nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row; }
      /* line 161, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute; }
      /* line 165, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-sm .navbar-nav .nav-link {
        padding-right: 0.7rem;
        padding-left: 0.7rem; }
    /* line 172, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }
    /* line 177, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-sm .navbar-collapse {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
          flex-basis: auto; }
    /* line 184, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-sm .navbar-toggler {
      display: none; } }

@media (max-width: 767.98px) {
  /* line 147, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    padding-right: 0;
    padding-left: 0; } }

@media (min-width: 768px) {
  /* line 145, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-md {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
    /* line 158, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-md .navbar-nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row; }
      /* line 161, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute; }
      /* line 165, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-md .navbar-nav .nav-link {
        padding-right: 0.7rem;
        padding-left: 0.7rem; }
    /* line 172, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }
    /* line 177, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-md .navbar-collapse {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
          flex-basis: auto; }
    /* line 184, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-md .navbar-toggler {
      display: none; } }

@media (max-width: 991.98px) {
  /* line 147, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid {
    padding-right: 0;
    padding-left: 0; } }

@media (min-width: 992px) {
  /* line 145, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-lg {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
    /* line 158, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-lg .navbar-nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row; }
      /* line 161, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute; }
      /* line 165, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 0.7rem;
        padding-left: 0.7rem; }
    /* line 172, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }
    /* line 177, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-lg .navbar-collapse {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
          flex-basis: auto; }
    /* line 184, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-lg .navbar-toggler {
      display: none; } }

@media (max-width: 1199.98px) {
  /* line 147, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid {
    padding-right: 0;
    padding-left: 0; } }

@media (min-width: 1200px) {
  /* line 145, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand-xl {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
    /* line 158, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-xl .navbar-nav {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row; }
      /* line 161, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute; }
      /* line 165, node_modules/bootstrap/scss/_navbar.scss */
      .navbar-expand-xl .navbar-nav .nav-link {
        padding-right: 0.7rem;
        padding-left: 0.7rem; }
    /* line 172, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap; }
    /* line 177, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-xl .navbar-collapse {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
          flex-basis: auto; }
    /* line 184, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand-xl .navbar-toggler {
      display: none; } }

/* line 145, node_modules/bootstrap/scss/_navbar.scss */
.navbar-expand {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start; }
  /* line 147, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand > .container,
  .navbar-expand > .container-fluid {
    padding-right: 0;
    padding-left: 0; }
  /* line 158, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row; }
    /* line 161, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand .navbar-nav .dropdown-menu {
      position: absolute; }
    /* line 165, node_modules/bootstrap/scss/_navbar.scss */
    .navbar-expand .navbar-nav .nav-link {
      padding-right: 0.7rem;
      padding-left: 0.7rem; }
  /* line 172, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand > .container,
  .navbar-expand > .container-fluid {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap; }
  /* line 177, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand .navbar-collapse {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
        flex-basis: auto; }
  /* line 184, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-expand .navbar-toggler {
    display: none; }

/* line 199, node_modules/bootstrap/scss/_navbar.scss */
.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9); }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9); }

/* line 208, node_modules/bootstrap/scss/_navbar.scss */
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.3); }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7); }
  /* line 215, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3); }

/* line 220, node_modules/bootstrap/scss/_navbar.scss */
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9); }

/* line 228, node_modules/bootstrap/scss/_navbar.scss */
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.3);
  border-color: rgba(0, 0, 0, 0.1); }

/* line 233, node_modules/bootstrap/scss/_navbar.scss */
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.3)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"); }

/* line 237, node_modules/bootstrap/scss/_navbar.scss */
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.3); }
  /* line 239, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-light .navbar-text a {
    color: rgba(0, 0, 0, 0.9); }
    /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
      color: rgba(0, 0, 0, 0.9); }

/* line 251, node_modules/bootstrap/scss/_navbar.scss */
.navbar-dark .navbar-brand {
  color: #fff; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
    color: #fff; }

/* line 260, node_modules/bootstrap/scss/_navbar.scss */
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9); }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: #fff; }
  /* line 267, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25); }

/* line 272, node_modules/bootstrap/scss/_navbar.scss */
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff; }

/* line 280, node_modules/bootstrap/scss/_navbar.scss */
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.1); }

/* line 285, node_modules/bootstrap/scss/_navbar.scss */
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"); }

/* line 289, node_modules/bootstrap/scss/_navbar.scss */
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.9); }
  /* line 291, node_modules/bootstrap/scss/_navbar.scss */
  .navbar-dark .navbar-text a {
    color: #fff; }
    /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
      color: #fff; }

/* line 5, node_modules/bootstrap/scss/_card.scss */
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem; }
  /* line 16, node_modules/bootstrap/scss/_card.scss */
  .card > hr {
    margin-right: 0;
    margin-left: 0; }
  /* line 22, node_modules/bootstrap/scss/_card.scss */
  .card > .list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem; }
  /* line 28, node_modules/bootstrap/scss/_card.scss */
  .card > .list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem; }

/* line 34, node_modules/bootstrap/scss/_card.scss */
.card-body {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1.25rem; }

/* line 41, node_modules/bootstrap/scss/_card.scss */
.card-title {
  margin-bottom: 0.75rem; }

/* line 45, node_modules/bootstrap/scss/_card.scss */
.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0; }

/* line 50, node_modules/bootstrap/scss/_card.scss */
.card-text:last-child {
  margin-bottom: 0; }

/* line 13, node_modules/bootstrap/scss/mixins/_hover.scss */
.card-link:hover {
  text-decoration: none; }

/* line 59, node_modules/bootstrap/scss/_card.scss */
.card-link + .card-link {
  margin-left: 1.25rem; }

/* line 68, node_modules/bootstrap/scss/_card.scss */
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }
  /* line 74, node_modules/bootstrap/scss/_card.scss */
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }
  /* line 79, node_modules/bootstrap/scss/_card.scss */
  .card-header + .list-group .list-group-item:first-child {
    border-top: 0; }

/* line 85, node_modules/bootstrap/scss/_card.scss */
.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125); }
  /* line 90, node_modules/bootstrap/scss/_card.scss */
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }

/* line 100, node_modules/bootstrap/scss/_card.scss */
.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0; }

/* line 107, node_modules/bootstrap/scss/_card.scss */
.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem; }

/* line 113, node_modules/bootstrap/scss/_card.scss */
.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem; }

/* line 122, node_modules/bootstrap/scss/_card.scss */
.card-img {
  width: 100%;
  border-radius: calc(0.25rem - 1px); }

/* line 128, node_modules/bootstrap/scss/_card.scss */
.card-img-top {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px); }

/* line 133, node_modules/bootstrap/scss/_card.scss */
.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px); }

/* line 141, node_modules/bootstrap/scss/_card.scss */
.card-deck {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  /* line 145, node_modules/bootstrap/scss/_card.scss */
  .card-deck .card {
    margin-bottom: 15px; }
  @media (min-width: 576px) {
    /* line 141, node_modules/bootstrap/scss/_card.scss */
    .card-deck {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
              flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px; }
      /* line 154, node_modules/bootstrap/scss/_card.scss */
      .card-deck .card {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
            -ms-flex: 1 0 0%;
                flex: 1 0 0%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px; } }

/* line 171, node_modules/bootstrap/scss/_card.scss */
.card-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  /* line 177, node_modules/bootstrap/scss/_card.scss */
  .card-group > .card {
    margin-bottom: 15px; }
  @media (min-width: 576px) {
    /* line 171, node_modules/bootstrap/scss/_card.scss */
    .card-group {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
              flex-flow: row wrap; }
      /* line 185, node_modules/bootstrap/scss/_card.scss */
      .card-group > .card {
        -webkit-box-flex: 1;
            -ms-flex: 1 0 0%;
                flex: 1 0 0%;
        margin-bottom: 0; }
        /* line 190, node_modules/bootstrap/scss/_card.scss */
        .card-group > .card + .card {
          margin-left: 0;
          border-left: 0; }
        /* line 197, node_modules/bootstrap/scss/_card.scss */
        .card-group > .card:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0; }
          /* line 200, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:first-child .card-img-top,
          .card-group > .card:first-child .card-header {
            border-top-right-radius: 0; }
          /* line 204, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:first-child .card-img-bottom,
          .card-group > .card:first-child .card-footer {
            border-bottom-right-radius: 0; }
        /* line 210, node_modules/bootstrap/scss/_card.scss */
        .card-group > .card:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0; }
          /* line 213, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:last-child .card-img-top,
          .card-group > .card:last-child .card-header {
            border-top-left-radius: 0; }
          /* line 217, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:last-child .card-img-bottom,
          .card-group > .card:last-child .card-footer {
            border-bottom-left-radius: 0; }
        /* line 223, node_modules/bootstrap/scss/_card.scss */
        .card-group > .card:only-child {
          border-radius: 0.25rem; }
          /* line 226, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:only-child .card-img-top,
          .card-group > .card:only-child .card-header {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem; }
          /* line 230, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:only-child .card-img-bottom,
          .card-group > .card:only-child .card-footer {
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem; }
        /* line 236, node_modules/bootstrap/scss/_card.scss */
        .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
          border-radius: 0; }
          /* line 239, node_modules/bootstrap/scss/_card.scss */
          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,
          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,
          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {
            border-radius: 0; } }

/* line 257, node_modules/bootstrap/scss/_card.scss */
.card-columns .card {
  margin-bottom: 0.75rem; }

@media (min-width: 576px) {
  /* line 256, node_modules/bootstrap/scss/_card.scss */
  .card-columns {
    -webkit-column-count: 5;
            column-count: 5;
    -webkit-column-gap: 1.25rem;
            column-gap: 1.25rem;
    orphans: 1;
    widows: 1; }
    /* line 267, node_modules/bootstrap/scss/_card.scss */
    .card-columns .card {
      display: inline-block;
      width: 100%; } }

/* line 280, node_modules/bootstrap/scss/_card.scss */
.accordion .card:not(:first-of-type):not(:last-of-type) {
  border-bottom: 0;
  border-radius: 0; }

/* line 286, node_modules/bootstrap/scss/_card.scss */
.accordion .card:not(:first-of-type) .card-header:first-child {
  border-radius: 0; }

/* line 291, node_modules/bootstrap/scss/_card.scss */
.accordion .card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0; }

/* line 297, node_modules/bootstrap/scss/_card.scss */
.accordion .card:last-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0; }

/* line 1, node_modules/bootstrap/scss/_breadcrumb.scss */
.breadcrumb {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #eee;
  border-radius: 0.25rem; }

/* line 13, node_modules/bootstrap/scss/_breadcrumb.scss */
.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem; }
  /* line 16, node_modules/bootstrap/scss/_breadcrumb.scss */
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/"; }

/* line 30, node_modules/bootstrap/scss/_breadcrumb.scss */
.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline; }

/* line 34, node_modules/bootstrap/scss/_breadcrumb.scss */
.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none; }

/* line 38, node_modules/bootstrap/scss/_breadcrumb.scss */
.breadcrumb-item.active {
  color: #6c757d; }

/* line 1, node_modules/bootstrap/scss/_pagination.scss */
.pagination {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem; }

/* line 7, node_modules/bootstrap/scss/_pagination.scss */
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #bd081c;
  background-color: #fff;
  border: 1px solid #dee2e6; }
  /* line 17, node_modules/bootstrap/scss/_pagination.scss */
  .page-link:hover {
    z-index: 2;
    color: #740511;
    text-decoration: none;
    background-color: #eee;
    border-color: #dee2e6; }
  /* line 25, node_modules/bootstrap/scss/_pagination.scss */
  .page-link:focus {
    z-index: 2;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25);
            box-shadow: 0 0 0 0.2rem rgba(189, 8, 28, 0.25); }
  /* line 32, node_modules/bootstrap/scss/_pagination.scss */
  .page-link:not(:disabled):not(.disabled) {
    cursor: pointer; }

/* line 39, node_modules/bootstrap/scss/_pagination.scss */
.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem; }

/* line 45, node_modules/bootstrap/scss/_pagination.scss */
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem; }

/* line 50, node_modules/bootstrap/scss/_pagination.scss */
.page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #bd081c;
  border-color: #bd081c; }

/* line 57, node_modules/bootstrap/scss/_pagination.scss */
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6; }

/* line 4, node_modules/bootstrap/scss/mixins/_pagination.scss */
.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5; }

/* line 12, node_modules/bootstrap/scss/mixins/_pagination.scss */
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem; }

/* line 17, node_modules/bootstrap/scss/mixins/_pagination.scss */
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem; }

/* line 4, node_modules/bootstrap/scss/mixins/_pagination.scss */
.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5; }

/* line 12, node_modules/bootstrap/scss/mixins/_pagination.scss */
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem; }

/* line 17, node_modules/bootstrap/scss/mixins/_pagination.scss */
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem; }

/* line 6, node_modules/bootstrap/scss/_badge.scss */
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem; }
  /* line 18, node_modules/bootstrap/scss/_badge.scss */
  .badge:empty {
    display: none; }

/* line 24, node_modules/bootstrap/scss/_badge.scss */
.btn .badge {
  position: relative;
  top: -1px; }

/* line 33, node_modules/bootstrap/scss/_badge.scss */
.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-primary {
  color: #fff;
  background-color: #bd081c; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-primary[href]:hover, .badge-primary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #8c0615; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-secondary {
  color: #fff;
  background-color: #6c757d; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-secondary[href]:hover, .badge-secondary[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #545b62; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-success {
  color: #fff;
  background-color: #24b47e; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-success[href]:hover, .badge-success[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #1c8a60; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-info {
  color: #212529;
  background-color: #46f8ff; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-info[href]:hover, .badge-info[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #13f6ff; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-warning {
  color: #212529;
  background-color: #ffc107; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-warning[href]:hover, .badge-warning[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #d39e00; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-danger {
  color: #fff;
  background-color: #bd081c; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-danger[href]:hover, .badge-danger[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #8c0615; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-light {
  color: #212529;
  background-color: #fff; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-light[href]:hover, .badge-light[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #e6e6e6; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-dark {
  color: #fff;
  background-color: #343a40; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-dark[href]:hover, .badge-dark[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #1d2124; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-purple {
  color: #fff;
  background-color: #6f42c1; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-purple[href]:hover, .badge-purple[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #59339d; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-purplepink {
  color: #fff;
  background-color: #9742c1; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-purplepink[href]:hover, .badge-purplepink[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #7a339d; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-indigo {
  color: #fff;
  background-color: #6610f2; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-indigo[href]:hover, .badge-indigo[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #510bc4; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-pink {
  color: #fff;
  background-color: #e83e8c; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-pink[href]:hover, .badge-pink[href]:focus {
    color: #fff;
    text-decoration: none;
    background-color: #d91a72; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-cyan {
  color: #212529;
  background-color: #46f8ff; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-cyan[href]:hover, .badge-cyan[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #13f6ff; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-lightgreen {
  color: #212529;
  background-color: #7eec9d; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-lightgreen[href]:hover, .badge-lightgreen[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #52e57b; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-graylight {
  color: #212529;
  background-color: #f8f9fa; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-graylight[href]:hover, .badge-graylight[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #dae0e5; }

/* line 44, node_modules/bootstrap/scss/_badge.scss */
.badge-gray200 {
  color: #212529;
  background-color: #eee; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .badge-gray200[href]:hover, .badge-gray200[href]:focus {
    color: #212529;
    text-decoration: none;
    background-color: #d5d5d5; }

/* line 1, node_modules/bootstrap/scss/_jumbotron.scss */
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #eee;
  border-radius: 0.3rem; }
  @media (min-width: 576px) {
    /* line 1, node_modules/bootstrap/scss/_jumbotron.scss */
    .jumbotron {
      padding: 4rem 2rem; } }

/* line 12, node_modules/bootstrap/scss/_jumbotron.scss */
.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0; }

/* line 5, node_modules/bootstrap/scss/_alert.scss */
.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem; }

/* line 14, node_modules/bootstrap/scss/_alert.scss */
.alert-heading {
  color: inherit; }

/* line 20, node_modules/bootstrap/scss/_alert.scss */
.alert-link {
  font-weight: 700; }

/* line 29, node_modules/bootstrap/scss/_alert.scss */
.alert-dismissible {
  padding-right: 4rem; }
  /* line 33, node_modules/bootstrap/scss/_alert.scss */
  .alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem 1.25rem;
    color: inherit; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-primary {
  color: #62040f;
  background-color: #f2ced2;
  border-color: #edbabf; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-primary hr {
    border-top-color: #e8a6ac; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-primary .alert-link {
    color: #310208; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-secondary hr {
    border-top-color: #c8cbcf; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-secondary .alert-link {
    color: #202326; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-success {
  color: #135e42;
  background-color: #d3f0e5;
  border-color: #c2eadb; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-success hr {
    border-top-color: #afe3d0; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-success .alert-link {
    color: #0a3424; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-info {
  color: #248185;
  background-color: #dafeff;
  border-color: #cbfdff; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-info hr {
    border-top-color: #b2fcff; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-info .alert-link {
    color: #195a5d; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-warning hr {
    border-top-color: #ffe8a1; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-warning .alert-link {
    color: #533f03; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-danger {
  color: #62040f;
  background-color: #f2ced2;
  border-color: #edbabf; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-danger hr {
    border-top-color: #e8a6ac; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-danger .alert-link {
    color: #310208; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-light {
  color: #858585;
  background-color: white;
  border-color: white; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-light hr {
    border-top-color: #f2f2f2; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-light .alert-link {
    color: #6c6c6c; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-dark hr {
    border-top-color: #b9bbbe; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-dark .alert-link {
    color: #040505; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-purple {
  color: #3a2264;
  background-color: #e2d9f3;
  border-color: #d7caee; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-purple hr {
    border-top-color: #c8b7e8; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-purple .alert-link {
    color: #24153e; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-purplepink {
  color: #4f2264;
  background-color: #ead9f3;
  border-color: #e2caee; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-purplepink hr {
    border-top-color: #d7b7e8; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-purplepink .alert-link {
    color: #31153e; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-indigo {
  color: #35087e;
  background-color: #e0cffc;
  border-color: #d4bcfb; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-indigo hr {
    border-top-color: #c5a4fa; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-indigo .alert-link {
    color: #21054e; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-pink {
  color: #792049;
  background-color: #fad8e8;
  border-color: #f9c9df; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-pink hr {
    border-top-color: #f6b2d1; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-pink .alert-link {
    color: #511531; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-cyan {
  color: #248185;
  background-color: #dafeff;
  border-color: #cbfdff; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-cyan hr {
    border-top-color: #b2fcff; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-cyan .alert-link {
    color: #195a5d; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-lightgreen {
  color: #427b52;
  background-color: #e5fbeb;
  border-color: #dbfae4; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-lightgreen hr {
    border-top-color: #c5f7d3; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-lightgreen .alert-link {
    color: #305a3c; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-graylight {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-graylight hr {
    border-top-color: #ececf6; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-graylight .alert-link {
    color: #686868; }

/* line 48, node_modules/bootstrap/scss/_alert.scss */
.alert-gray200 {
  color: #7c7c7c;
  background-color: #fcfcfc;
  border-color: #fafafa; }
  /* line 6, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-gray200 hr {
    border-top-color: #ededed; }
  /* line 10, node_modules/bootstrap/scss/mixins/_alert.scss */
  .alert-gray200 .alert-link {
    color: #636363; }

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0; }
  to {
    background-position: 0 0; } }

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0; }
  to {
    background-position: 0 0; } }

/* line 6, node_modules/bootstrap/scss/_progress.scss */
.progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #eee;
  border-radius: 0.25rem; }

/* line 16, node_modules/bootstrap/scss/_progress.scss */
.progress-bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #bd081c;
  -webkit-transition: width 0.6s ease;
  transition: width 0.6s ease; }
  @media screen and (prefers-reduced-motion: reduce) {
    /* line 16, node_modules/bootstrap/scss/_progress.scss */
    .progress-bar {
      -webkit-transition: none;
      transition: none; } }

/* line 27, node_modules/bootstrap/scss/_progress.scss */
.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem; }

/* line 32, node_modules/bootstrap/scss/_progress.scss */
.progress-bar-animated {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
          animation: progress-bar-stripes 1s linear infinite; }

/* line 1, node_modules/bootstrap/scss/_media.scss */
.media {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start; }

/* line 6, node_modules/bootstrap/scss/_media.scss */
.media-body {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1; }

/* line 5, node_modules/bootstrap/scss/_list-group.scss */
.list-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 0;
  margin-bottom: 0; }

/* line 20, node_modules/bootstrap/scss/_list-group.scss */
.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-action:hover, .list-group-item-action:focus {
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa; }
  /* line 32, node_modules/bootstrap/scss/_list-group.scss */
  .list-group-item-action:active {
    color: #343a40;
    background-color: #eee; }

/* line 43, node_modules/bootstrap/scss/_list-group.scss */
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125); }
  /* line 52, node_modules/bootstrap/scss/_list-group.scss */
  .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem; }
  /* line 56, node_modules/bootstrap/scss/_list-group.scss */
  .list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item:hover, .list-group-item:focus {
    z-index: 1;
    text-decoration: none; }
  /* line 66, node_modules/bootstrap/scss/_list-group.scss */
  .list-group-item.disabled, .list-group-item:disabled {
    color: #6c757d;
    background-color: #fff; }
  /* line 73, node_modules/bootstrap/scss/_list-group.scss */
  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #bd081c;
    border-color: #bd081c; }

/* line 88, node_modules/bootstrap/scss/_list-group.scss */
.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0; }

/* line 95, node_modules/bootstrap/scss/_list-group.scss */
.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0; }

/* line 101, node_modules/bootstrap/scss/_list-group.scss */
.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-primary {
  color: #62040f;
  background-color: #edbabf; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
    color: #62040f;
    background-color: #e8a6ac; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #62040f;
    border-color: #62040f; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
    color: #383d41;
    background-color: #c8cbcf; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #383d41;
    border-color: #383d41; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-success {
  color: #135e42;
  background-color: #c2eadb; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
    color: #135e42;
    background-color: #afe3d0; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #135e42;
    border-color: #135e42; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-info {
  color: #248185;
  background-color: #cbfdff; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
    color: #248185;
    background-color: #b2fcff; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #248185;
    border-color: #248185; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
    color: #856404;
    background-color: #ffe8a1; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-danger {
  color: #62040f;
  background-color: #edbabf; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
    color: #62040f;
    background-color: #e8a6ac; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #62040f;
    border-color: #62040f; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-light {
  color: #858585;
  background-color: white; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
    color: #858585;
    background-color: #f2f2f2; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #858585;
    border-color: #858585; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
    color: #1b1e21;
    background-color: #b9bbbe; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #1b1e21;
    border-color: #1b1e21; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-purple {
  color: #3a2264;
  background-color: #d7caee; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-purple.list-group-item-action:hover, .list-group-item-purple.list-group-item-action:focus {
    color: #3a2264;
    background-color: #c8b7e8; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-purple.list-group-item-action.active {
    color: #fff;
    background-color: #3a2264;
    border-color: #3a2264; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-purplepink {
  color: #4f2264;
  background-color: #e2caee; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-purplepink.list-group-item-action:hover, .list-group-item-purplepink.list-group-item-action:focus {
    color: #4f2264;
    background-color: #d7b7e8; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-purplepink.list-group-item-action.active {
    color: #fff;
    background-color: #4f2264;
    border-color: #4f2264; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-indigo {
  color: #35087e;
  background-color: #d4bcfb; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-indigo.list-group-item-action:hover, .list-group-item-indigo.list-group-item-action:focus {
    color: #35087e;
    background-color: #c5a4fa; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-indigo.list-group-item-action.active {
    color: #fff;
    background-color: #35087e;
    border-color: #35087e; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-pink {
  color: #792049;
  background-color: #f9c9df; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-pink.list-group-item-action:hover, .list-group-item-pink.list-group-item-action:focus {
    color: #792049;
    background-color: #f6b2d1; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-pink.list-group-item-action.active {
    color: #fff;
    background-color: #792049;
    border-color: #792049; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-cyan {
  color: #248185;
  background-color: #cbfdff; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-cyan.list-group-item-action:hover, .list-group-item-cyan.list-group-item-action:focus {
    color: #248185;
    background-color: #b2fcff; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-cyan.list-group-item-action.active {
    color: #fff;
    background-color: #248185;
    border-color: #248185; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-lightgreen {
  color: #427b52;
  background-color: #dbfae4; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-lightgreen.list-group-item-action:hover, .list-group-item-lightgreen.list-group-item-action:focus {
    color: #427b52;
    background-color: #c5f7d3; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-lightgreen.list-group-item-action.active {
    color: #fff;
    background-color: #427b52;
    border-color: #427b52; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-graylight {
  color: #818182;
  background-color: #fdfdfe; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-graylight.list-group-item-action:hover, .list-group-item-graylight.list-group-item-action:focus {
    color: #818182;
    background-color: #ececf6; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-graylight.list-group-item-action.active {
    color: #fff;
    background-color: #818182;
    border-color: #818182; }

/* line 4, node_modules/bootstrap/scss/mixins/_list-group.scss */
.list-group-item-gray200 {
  color: #7c7c7c;
  background-color: #fafafa; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .list-group-item-gray200.list-group-item-action:hover, .list-group-item-gray200.list-group-item-action:focus {
    color: #7c7c7c;
    background-color: #ededed; }
  /* line 14, node_modules/bootstrap/scss/mixins/_list-group.scss */
  .list-group-item-gray200.list-group-item-action.active {
    color: #fff;
    background-color: #7c7c7c;
    border-color: #7c7c7c; }

/* line 1, node_modules/bootstrap/scss/_close.scss */
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .close:hover, .close:focus {
    color: #000;
    text-decoration: none;
    opacity: .75; }
  /* line 17, node_modules/bootstrap/scss/_close.scss */
  .close:not(:disabled):not(.disabled) {
    cursor: pointer; }

/* line 28, node_modules/bootstrap/scss/_close.scss */
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none; }

/* line 8, node_modules/bootstrap/scss/_modal.scss */
.modal-open {
  overflow: hidden; }

/* line 13, node_modules/bootstrap/scss/_modal.scss */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0; }
  /* line 29, node_modules/bootstrap/scss/_modal.scss */
  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto; }

/* line 36, node_modules/bootstrap/scss/_modal.scss */
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none; }
  /* line 44, node_modules/bootstrap/scss/_modal.scss */
  .modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform 0.3s ease-out;
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translate(0, -25%);
            transform: translate(0, -25%); }
    @media screen and (prefers-reduced-motion: reduce) {
      /* line 44, node_modules/bootstrap/scss/_modal.scss */
      .modal.fade .modal-dialog {
        -webkit-transition: none;
        transition: none; } }
  /* line 48, node_modules/bootstrap/scss/_modal.scss */
  .modal.show .modal-dialog {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0); }

/* line 53, node_modules/bootstrap/scss/_modal.scss */
.modal-dialog-centered {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-height: calc(100% - (0.5rem * 2)); }

/* line 60, node_modules/bootstrap/scss/_modal.scss */
.modal-content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0; }

/* line 77, node_modules/bootstrap/scss/_modal.scss */
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000; }
  /* line 87, node_modules/bootstrap/scss/_modal.scss */
  .modal-backdrop.fade {
    opacity: 0; }
  /* line 88, node_modules/bootstrap/scss/_modal.scss */
  .modal-backdrop.show {
    opacity: 0.5; }

/* line 93, node_modules/bootstrap/scss/_modal.scss */
.modal-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem; }
  /* line 101, node_modules/bootstrap/scss/_modal.scss */
  .modal-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto; }

/* line 109, node_modules/bootstrap/scss/_modal.scss */
.modal-title {
  margin-bottom: 0;
  line-height: 1.5; }

/* line 116, node_modules/bootstrap/scss/_modal.scss */
.modal-body {
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem; }

/* line 125, node_modules/bootstrap/scss/_modal.scss */
.modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee; }
  /* line 133, node_modules/bootstrap/scss/_modal.scss */
  .modal-footer > :not(:first-child) {
    margin-left: .25rem; }
  /* line 134, node_modules/bootstrap/scss/_modal.scss */
  .modal-footer > :not(:last-child) {
    margin-right: .25rem; }

/* line 138, node_modules/bootstrap/scss/_modal.scss */
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll; }

@media (min-width: 576px) {
  /* line 149, node_modules/bootstrap/scss/_modal.scss */
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto; }
  /* line 154, node_modules/bootstrap/scss/_modal.scss */
  .modal-dialog-centered {
    min-height: calc(100% - (1.75rem * 2)); }
  /* line 162, node_modules/bootstrap/scss/_modal.scss */
  .modal-sm {
    max-width: 300px; } }

@media (min-width: 992px) {
  /* line 167, node_modules/bootstrap/scss/_modal.scss */
  .modal-lg {
    max-width: 800px; } }

/* line 2, node_modules/bootstrap/scss/_tooltip.scss */
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0; }
  /* line 15, node_modules/bootstrap/scss/_tooltip.scss */
  .tooltip.show {
    opacity: 0.9; }
  /* line 17, node_modules/bootstrap/scss/_tooltip.scss */
  .tooltip .arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem; }
    /* line 23, node_modules/bootstrap/scss/_tooltip.scss */
    .tooltip .arrow::before {
      position: absolute;
      content: "";
      border-color: transparent;
      border-style: solid; }

/* line 32, node_modules/bootstrap/scss/_tooltip.scss */
.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {
  padding: 0.4rem 0; }
  /* line 35, node_modules/bootstrap/scss/_tooltip.scss */
  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {
    bottom: 0; }
    /* line 38, node_modules/bootstrap/scss/_tooltip.scss */
    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
      top: 0;
      border-width: 0.4rem 0.4rem 0;
      border-top-color: #000; }

/* line 46, node_modules/bootstrap/scss/_tooltip.scss */
.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {
  padding: 0 0.4rem; }
  /* line 49, node_modules/bootstrap/scss/_tooltip.scss */
  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem; }
    /* line 54, node_modules/bootstrap/scss/_tooltip.scss */
    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
      right: 0;
      border-width: 0.4rem 0.4rem 0.4rem 0;
      border-right-color: #000; }

/* line 62, node_modules/bootstrap/scss/_tooltip.scss */
.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {
  padding: 0.4rem 0; }
  /* line 65, node_modules/bootstrap/scss/_tooltip.scss */
  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {
    top: 0; }
    /* line 68, node_modules/bootstrap/scss/_tooltip.scss */
    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
      bottom: 0;
      border-width: 0 0.4rem 0.4rem;
      border-bottom-color: #000; }

/* line 76, node_modules/bootstrap/scss/_tooltip.scss */
.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {
  padding: 0 0.4rem; }
  /* line 79, node_modules/bootstrap/scss/_tooltip.scss */
  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem; }
    /* line 84, node_modules/bootstrap/scss/_tooltip.scss */
    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
      left: 0;
      border-width: 0.4rem 0 0.4rem 0.4rem;
      border-left-color: #000; }

/* line 108, node_modules/bootstrap/scss/_tooltip.scss */
.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem; }

/* line 1, node_modules/bootstrap/scss/_popover.scss */
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem; }
  /* line 20, node_modules/bootstrap/scss/_popover.scss */
  .popover .arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.3rem; }
    /* line 27, node_modules/bootstrap/scss/_popover.scss */
    .popover .arrow::before, .popover .arrow::after {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid; }

/* line 38, node_modules/bootstrap/scss/_popover.scss */
.bs-popover-top, .bs-popover-auto[x-placement^="top"] {
  margin-bottom: 0.5rem; }
  /* line 41, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-top .arrow, .bs-popover-auto[x-placement^="top"] .arrow {
    bottom: calc((0.5rem + 1px) * -1); }
  /* line 45, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before,
  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    border-width: 0.5rem 0.5rem 0; }
  /* line 50, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {
    bottom: 0;
    border-top-color: rgba(0, 0, 0, 0.25); }
  /* line 55, node_modules/bootstrap/scss/_popover.scss */
  
  .bs-popover-top .arrow::after,
  .bs-popover-auto[x-placement^="top"] .arrow::after {
    bottom: 1px;
    border-top-color: #fff; }

/* line 61, node_modules/bootstrap/scss/_popover.scss */
.bs-popover-right, .bs-popover-auto[x-placement^="right"] {
  margin-left: 0.5rem; }
  /* line 64, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-right .arrow, .bs-popover-auto[x-placement^="right"] .arrow {
    left: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0; }
  /* line 71, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before,
  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    border-width: 0.5rem 0.5rem 0.5rem 0; }
  /* line 76, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {
    left: 0;
    border-right-color: rgba(0, 0, 0, 0.25); }
  /* line 81, node_modules/bootstrap/scss/_popover.scss */
  
  .bs-popover-right .arrow::after,
  .bs-popover-auto[x-placement^="right"] .arrow::after {
    left: 1px;
    border-right-color: #fff; }

/* line 87, node_modules/bootstrap/scss/_popover.scss */
.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {
  margin-top: 0.5rem; }
  /* line 90, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-bottom .arrow, .bs-popover-auto[x-placement^="bottom"] .arrow {
    top: calc((0.5rem + 1px) * -1); }
  /* line 94, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before,
  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    border-width: 0 0.5rem 0.5rem 0.5rem; }
  /* line 99, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
    top: 0;
    border-bottom-color: rgba(0, 0, 0, 0.25); }
  /* line 104, node_modules/bootstrap/scss/_popover.scss */
  
  .bs-popover-bottom .arrow::after,
  .bs-popover-auto[x-placement^="bottom"] .arrow::after {
    top: 1px;
    border-bottom-color: #fff; }
  /* line 110, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f7f7f7; }

/* line 122, node_modules/bootstrap/scss/_popover.scss */
.bs-popover-left, .bs-popover-auto[x-placement^="left"] {
  margin-right: 0.5rem; }
  /* line 125, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-left .arrow, .bs-popover-auto[x-placement^="left"] .arrow {
    right: calc((0.5rem + 1px) * -1);
    width: 0.5rem;
    height: 1rem;
    margin: 0.3rem 0; }
  /* line 132, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before,
  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    border-width: 0.5rem 0 0.5rem 0.5rem; }
  /* line 137, node_modules/bootstrap/scss/_popover.scss */
  .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {
    right: 0;
    border-left-color: rgba(0, 0, 0, 0.25); }
  /* line 142, node_modules/bootstrap/scss/_popover.scss */
  
  .bs-popover-left .arrow::after,
  .bs-popover-auto[x-placement^="left"] .arrow::after {
    right: 1px;
    border-left-color: #fff; }

/* line 165, node_modules/bootstrap/scss/_popover.scss */
.popover-header {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  color: inherit;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px); }
  /* line 175, node_modules/bootstrap/scss/_popover.scss */
  .popover-header:empty {
    display: none; }

/* line 180, node_modules/bootstrap/scss/_popover.scss */
.popover-body {
  padding: 0.5rem 0.75rem;
  color: #343a40; }

/* line 11, node_modules/bootstrap/scss/_carousel.scss */
.carousel {
  position: relative; }

/* line 15, node_modules/bootstrap/scss/_carousel.scss */
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden; }

/* line 21, node_modules/bootstrap/scss/_carousel.scss */
.carousel-item {
  position: relative;
  display: none;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  -webkit-transition: -webkit-transform 0.6s ease;
  transition: -webkit-transform 0.6s ease;
  transition: transform 0.6s ease;
  transition: transform 0.6s ease, -webkit-transform 0.6s ease;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-perspective: 1000px;
          perspective: 1000px; }
  @media screen and (prefers-reduced-motion: reduce) {
    /* line 21, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-item {
      -webkit-transition: none;
      transition: none; } }

/* line 31, node_modules/bootstrap/scss/_carousel.scss */
.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block; }

/* line 37, node_modules/bootstrap/scss/_carousel.scss */
.carousel-item-next,
.carousel-item-prev {
  position: absolute;
  top: 0; }

/* line 43, node_modules/bootstrap/scss/_carousel.scss */
.carousel-item-next.carousel-item-left,
.carousel-item-prev.carousel-item-right {
  -webkit-transform: translateX(0);
          transform: translateX(0); }
  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
    /* line 43, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-item-next.carousel-item-left,
    .carousel-item-prev.carousel-item-right {
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0); } }

/* line 52, node_modules/bootstrap/scss/_carousel.scss */
.carousel-item-next,
.active.carousel-item-right {
  -webkit-transform: translateX(100%);
          transform: translateX(100%); }
  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
    /* line 52, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-item-next,
    .active.carousel-item-right {
      -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0); } }

/* line 61, node_modules/bootstrap/scss/_carousel.scss */
.carousel-item-prev,
.active.carousel-item-left {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%); }
  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
    /* line 61, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-item-prev,
    .active.carousel-item-left {
      -webkit-transform: translate3d(-100%, 0, 0);
              transform: translate3d(-100%, 0, 0); } }

/* line 76, node_modules/bootstrap/scss/_carousel.scss */
.carousel-fade .carousel-item {
  opacity: 0;
  -webkit-transition-duration: .6s;
          transition-duration: .6s;
  -webkit-transition-property: opacity;
  transition-property: opacity; }

/* line 82, node_modules/bootstrap/scss/_carousel.scss */
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  opacity: 1; }

/* line 88, node_modules/bootstrap/scss/_carousel.scss */
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  opacity: 0; }

/* line 93, node_modules/bootstrap/scss/_carousel.scss */
.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active,
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-prev {
  -webkit-transform: translateX(0);
          transform: translateX(0); }
  @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
    /* line 93, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-fade .carousel-item-next,
    .carousel-fade .carousel-item-prev,
    .carousel-fade .carousel-item.active,
    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-prev {
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0); } }

/* line 111, node_modules/bootstrap/scss/_carousel.scss */
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5; }
  /* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
  .carousel-control-prev:hover, .carousel-control-prev:focus,
  .carousel-control-next:hover,
  .carousel-control-next:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9; }

/* line 135, node_modules/bootstrap/scss/_carousel.scss */
.carousel-control-prev {
  left: 0; }

/* line 141, node_modules/bootstrap/scss/_carousel.scss */
.carousel-control-next {
  right: 0; }

/* line 149, node_modules/bootstrap/scss/_carousel.scss */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: transparent no-repeat center center;
  background-size: 100% 100%; }

/* line 157, node_modules/bootstrap/scss/_carousel.scss */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E"); }

/* line 160, node_modules/bootstrap/scss/_carousel.scss */
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E"); }

/* line 170, node_modules/bootstrap/scss/_carousel.scss */
.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none; }
  /* line 184, node_modules/bootstrap/scss/_carousel.scss */
  .carousel-indicators li {
    position: relative;
    -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    width: 30px;
    height: 3px;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5); }
    /* line 196, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-indicators li::before {
      position: absolute;
      top: -10px;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 10px;
      content: ""; }
    /* line 205, node_modules/bootstrap/scss/_carousel.scss */
    .carousel-indicators li::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 10px;
      content: ""; }
  /* line 216, node_modules/bootstrap/scss/_carousel.scss */
  .carousel-indicators .active {
    background-color: #fff; }

/* line 226, node_modules/bootstrap/scss/_carousel.scss */
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center; }

/* line 3, node_modules/bootstrap/scss/utilities/_align.scss */
.align-baseline {
  vertical-align: baseline !important; }

/* line 4, node_modules/bootstrap/scss/utilities/_align.scss */
.align-top {
  vertical-align: top !important; }

/* line 5, node_modules/bootstrap/scss/utilities/_align.scss */
.align-middle {
  vertical-align: middle !important; }

/* line 6, node_modules/bootstrap/scss/utilities/_align.scss */
.align-bottom {
  vertical-align: bottom !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_align.scss */
.align-text-bottom {
  vertical-align: text-bottom !important; }

/* line 8, node_modules/bootstrap/scss/utilities/_align.scss */
.align-text-top {
  vertical-align: text-top !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-primary {
  background-color: #bd081c !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-primary:hover, a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
  background-color: #8c0615 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-secondary {
  background-color: #6c757d !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-secondary:hover, a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #545b62 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-success {
  background-color: #24b47e !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-success:hover, a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #1c8a60 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-info {
  background-color: #46f8ff !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-info:hover, a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #13f6ff !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-warning {
  background-color: #ffc107 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-warning:hover, a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #d39e00 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-danger {
  background-color: #bd081c !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-danger:hover, a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #8c0615 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-light {
  background-color: #fff !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #e6e6e6 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-dark {
  background-color: #343a40 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #1d2124 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-purple {
  background-color: #6f42c1 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-purple:hover, a.bg-purple:focus,
button.bg-purple:hover,
button.bg-purple:focus {
  background-color: #59339d !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-purplepink {
  background-color: #9742c1 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-purplepink:hover, a.bg-purplepink:focus,
button.bg-purplepink:hover,
button.bg-purplepink:focus {
  background-color: #7a339d !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-indigo {
  background-color: #6610f2 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-indigo:hover, a.bg-indigo:focus,
button.bg-indigo:hover,
button.bg-indigo:focus {
  background-color: #510bc4 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-pink {
  background-color: #e83e8c !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-pink:hover, a.bg-pink:focus,
button.bg-pink:hover,
button.bg-pink:focus {
  background-color: #d91a72 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-cyan {
  background-color: #46f8ff !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-cyan:hover, a.bg-cyan:focus,
button.bg-cyan:hover,
button.bg-cyan:focus {
  background-color: #13f6ff !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-lightgreen {
  background-color: #7eec9d !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-lightgreen:hover, a.bg-lightgreen:focus,
button.bg-lightgreen:hover,
button.bg-lightgreen:focus {
  background-color: #52e57b !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-graylight {
  background-color: #f8f9fa !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-graylight:hover, a.bg-graylight:focus,
button.bg-graylight:hover,
button.bg-graylight:focus {
  background-color: #dae0e5 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_background-variant.scss */
.bg-gray200 {
  background-color: #eee !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.bg-gray200:hover, a.bg-gray200:focus,
button.bg-gray200:hover,
button.bg-gray200:focus {
  background-color: #d5d5d5 !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_background.scss */
.bg-white {
  background-color: #fff !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_background.scss */
.bg-transparent {
  background-color: transparent !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_borders.scss */
.border {
  border: 1px solid #dee2e6 !important; }

/* line 8, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-top {
  border-top: 1px solid #dee2e6 !important; }

/* line 9, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-right {
  border-right: 1px solid #dee2e6 !important; }

/* line 10, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-bottom {
  border-bottom: 1px solid #dee2e6 !important; }

/* line 11, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-left {
  border-left: 1px solid #dee2e6 !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-0 {
  border: 0 !important; }

/* line 14, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-top-0 {
  border-top: 0 !important; }

/* line 15, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-right-0 {
  border-right: 0 !important; }

/* line 16, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-bottom-0 {
  border-bottom: 0 !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-left-0 {
  border-left: 0 !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-primary {
  border-color: #bd081c !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-secondary {
  border-color: #6c757d !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-success {
  border-color: #24b47e !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-info {
  border-color: #46f8ff !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-warning {
  border-color: #ffc107 !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-danger {
  border-color: #bd081c !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-light {
  border-color: #fff !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-dark {
  border-color: #343a40 !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-purple {
  border-color: #6f42c1 !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-purplepink {
  border-color: #9742c1 !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-indigo {
  border-color: #6610f2 !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-pink {
  border-color: #e83e8c !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-cyan {
  border-color: #46f8ff !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-lightgreen {
  border-color: #7eec9d !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-graylight {
  border-color: #f8f9fa !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-gray200 {
  border-color: #eee !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_borders.scss */
.border-white {
  border-color: #fff !important; }

/* line 33, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded {
  border-radius: 0.25rem !important; }

/* line 36, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important; }

/* line 40, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important; }

/* line 44, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important; }

/* line 48, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important; }

/* line 53, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded-circle {
  border-radius: 50% !important; }

/* line 57, node_modules/bootstrap/scss/utilities/_borders.scss */
.rounded-0 {
  border-radius: 0 !important; }

/* line 2, node_modules/bootstrap/scss/mixins/_clearfix.scss */
.clearfix::after {
  display: block;
  clear: both;
  content: ""; }

/* line 11, node_modules/bootstrap/scss/utilities/_display.scss */
.d-none {
  display: none !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_display.scss */
.d-inline {
  display: inline !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_display.scss */
.d-inline-block {
  display: inline-block !important; }

/* line 14, node_modules/bootstrap/scss/utilities/_display.scss */
.d-block {
  display: block !important; }

/* line 15, node_modules/bootstrap/scss/utilities/_display.scss */
.d-table {
  display: table !important; }

/* line 16, node_modules/bootstrap/scss/utilities/_display.scss */
.d-table-row {
  display: table-row !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_display.scss */
.d-table-cell {
  display: table-cell !important; }

/* line 18, node_modules/bootstrap/scss/utilities/_display.scss */
.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important; }

/* line 19, node_modules/bootstrap/scss/utilities/_display.scss */
.d-inline-flex {
  display: -webkit-inline-box !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important; }

@media (min-width: 576px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-none {
    display: none !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-inline {
    display: inline !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-inline-block {
    display: inline-block !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-block {
    display: block !important; }
  /* line 15, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-table {
    display: table !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-table-row {
    display: table-row !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-table-cell {
    display: table-cell !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-sm-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important; } }

@media (min-width: 768px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-none {
    display: none !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-inline {
    display: inline !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-inline-block {
    display: inline-block !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-block {
    display: block !important; }
  /* line 15, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-table {
    display: table !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-table-row {
    display: table-row !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-table-cell {
    display: table-cell !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-md-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important; } }

@media (min-width: 992px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-none {
    display: none !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-inline {
    display: inline !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-inline-block {
    display: inline-block !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-block {
    display: block !important; }
  /* line 15, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-table {
    display: table !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-table-row {
    display: table-row !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-table-cell {
    display: table-cell !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-lg-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important; } }

@media (min-width: 1200px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-none {
    display: none !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-inline {
    display: inline !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-inline-block {
    display: inline-block !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-block {
    display: block !important; }
  /* line 15, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-table {
    display: table !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-table-row {
    display: table-row !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-table-cell {
    display: table-cell !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-xl-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important; } }

@media print {
  /* line 29, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-none {
    display: none !important; }
  /* line 30, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-inline {
    display: inline !important; }
  /* line 31, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-inline-block {
    display: inline-block !important; }
  /* line 32, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-block {
    display: block !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-table {
    display: table !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-table-row {
    display: table-row !important; }
  /* line 35, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-table-cell {
    display: table-cell !important; }
  /* line 36, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-flex {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important; }
  /* line 37, node_modules/bootstrap/scss/utilities/_display.scss */
  .d-print-inline-flex {
    display: -webkit-inline-box !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important; } }

/* line 3, node_modules/bootstrap/scss/utilities/_embed.scss */
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden; }
  /* line 10, node_modules/bootstrap/scss/utilities/_embed.scss */
  .embed-responsive::before {
    display: block;
    content: ""; }
  /* line 15, node_modules/bootstrap/scss/utilities/_embed.scss */
  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0; }

/* line 31, node_modules/bootstrap/scss/utilities/_embed.scss */
.embed-responsive-21by9::before {
  padding-top: 42.85714%; }

/* line 37, node_modules/bootstrap/scss/utilities/_embed.scss */
.embed-responsive-16by9::before {
  padding-top: 56.25%; }

/* line 43, node_modules/bootstrap/scss/utilities/_embed.scss */
.embed-responsive-4by3::before {
  padding-top: 75%; }

/* line 49, node_modules/bootstrap/scss/utilities/_embed.scss */
.embed-responsive-1by1::before {
  padding-top: 100%; }

/* line 11, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-row {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
      -ms-flex-direction: row !important;
          flex-direction: row !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-column {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
      -ms-flex-direction: column !important;
          flex-direction: column !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-row-reverse {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: reverse !important;
      -ms-flex-direction: row-reverse !important;
          flex-direction: row-reverse !important; }

/* line 14, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-column-reverse {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: reverse !important;
      -ms-flex-direction: column-reverse !important;
          flex-direction: column-reverse !important; }

/* line 16, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-wrap {
  -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important; }

/* line 18, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-wrap-reverse {
  -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important; }

/* line 19, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-fill {
  -webkit-box-flex: 1 !important;
      -ms-flex: 1 1 auto !important;
          flex: 1 1 auto !important; }

/* line 20, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-grow-0 {
  -webkit-box-flex: 0 !important;
      -ms-flex-positive: 0 !important;
          flex-grow: 0 !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-grow-1 {
  -webkit-box-flex: 1 !important;
      -ms-flex-positive: 1 !important;
          flex-grow: 1 !important; }

/* line 22, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important; }

/* line 23, node_modules/bootstrap/scss/utilities/_flex.scss */
.flex-shrink-1 {
  -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_flex.scss */
.justify-content-start {
  -webkit-box-pack: start !important;
      -ms-flex-pack: start !important;
          justify-content: flex-start !important; }

/* line 26, node_modules/bootstrap/scss/utilities/_flex.scss */
.justify-content-end {
  -webkit-box-pack: end !important;
      -ms-flex-pack: end !important;
          justify-content: flex-end !important; }

/* line 27, node_modules/bootstrap/scss/utilities/_flex.scss */
.justify-content-center {
  -webkit-box-pack: center !important;
      -ms-flex-pack: center !important;
          justify-content: center !important; }

/* line 28, node_modules/bootstrap/scss/utilities/_flex.scss */
.justify-content-between {
  -webkit-box-pack: justify !important;
      -ms-flex-pack: justify !important;
          justify-content: space-between !important; }

/* line 29, node_modules/bootstrap/scss/utilities/_flex.scss */
.justify-content-around {
  -ms-flex-pack: distribute !important;
      justify-content: space-around !important; }

/* line 31, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-items-start {
  -webkit-box-align: start !important;
      -ms-flex-align: start !important;
          align-items: flex-start !important; }

/* line 32, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-items-end {
  -webkit-box-align: end !important;
      -ms-flex-align: end !important;
          align-items: flex-end !important; }

/* line 33, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-items-center {
  -webkit-box-align: center !important;
      -ms-flex-align: center !important;
          align-items: center !important; }

/* line 34, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-items-baseline {
  -webkit-box-align: baseline !important;
      -ms-flex-align: baseline !important;
          align-items: baseline !important; }

/* line 35, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-items-stretch {
  -webkit-box-align: stretch !important;
      -ms-flex-align: stretch !important;
          align-items: stretch !important; }

/* line 37, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-content-start {
  -ms-flex-line-pack: start !important;
      align-content: flex-start !important; }

/* line 38, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-content-end {
  -ms-flex-line-pack: end !important;
      align-content: flex-end !important; }

/* line 39, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-content-center {
  -ms-flex-line-pack: center !important;
      align-content: center !important; }

/* line 40, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-content-between {
  -ms-flex-line-pack: justify !important;
      align-content: space-between !important; }

/* line 41, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-content-around {
  -ms-flex-line-pack: distribute !important;
      align-content: space-around !important; }

/* line 42, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-content-stretch {
  -ms-flex-line-pack: stretch !important;
      align-content: stretch !important; }

/* line 44, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-self-auto {
  -ms-flex-item-align: auto !important;
      align-self: auto !important; }

/* line 45, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-self-start {
  -ms-flex-item-align: start !important;
      align-self: flex-start !important; }

/* line 46, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-self-end {
  -ms-flex-item-align: end !important;
      align-self: flex-end !important; }

/* line 47, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-self-center {
  -ms-flex-item-align: center !important;
      align-self: center !important; }

/* line 48, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-self-baseline {
  -ms-flex-item-align: baseline !important;
      align-self: baseline !important; }

/* line 49, node_modules/bootstrap/scss/utilities/_flex.scss */
.align-self-stretch {
  -ms-flex-item-align: stretch !important;
      align-self: stretch !important; }

@media (min-width: 576px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-wrap {
    -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-nowrap {
    -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-fill {
    -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important; }
  /* line 20, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-grow-0 {
    -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
            flex-grow: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-grow-1 {
    -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
            flex-grow: 1 !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-shrink-0 {
    -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-sm-shrink-1 {
    -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-sm-start {
    -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important; }
  /* line 26, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-sm-end {
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important; }
  /* line 27, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-sm-center {
    -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important; }
  /* line 28, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-sm-between {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important; }
  /* line 29, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-sm-around {
    -ms-flex-pack: distribute !important;
        justify-content: space-around !important; }
  /* line 31, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-sm-start {
    -webkit-box-align: start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important; }
  /* line 32, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-sm-end {
    -webkit-box-align: end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-sm-center {
    -webkit-box-align: center !important;
        -ms-flex-align: center !important;
            align-items: center !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-sm-baseline {
    -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important; }
  /* line 35, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-sm-stretch {
    -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important; }
  /* line 37, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-sm-start {
    -ms-flex-line-pack: start !important;
        align-content: flex-start !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-sm-end {
    -ms-flex-line-pack: end !important;
        align-content: flex-end !important; }
  /* line 39, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-sm-center {
    -ms-flex-line-pack: center !important;
        align-content: center !important; }
  /* line 40, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-sm-between {
    -ms-flex-line-pack: justify !important;
        align-content: space-between !important; }
  /* line 41, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-sm-around {
    -ms-flex-line-pack: distribute !important;
        align-content: space-around !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-sm-stretch {
    -ms-flex-line-pack: stretch !important;
        align-content: stretch !important; }
  /* line 44, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-sm-auto {
    -ms-flex-item-align: auto !important;
        align-self: auto !important; }
  /* line 45, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-sm-start {
    -ms-flex-item-align: start !important;
        align-self: flex-start !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-sm-end {
    -ms-flex-item-align: end !important;
        align-self: flex-end !important; }
  /* line 47, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-sm-center {
    -ms-flex-item-align: center !important;
        align-self: center !important; }
  /* line 48, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-sm-baseline {
    -ms-flex-item-align: baseline !important;
        align-self: baseline !important; }
  /* line 49, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-sm-stretch {
    -ms-flex-item-align: stretch !important;
        align-self: stretch !important; } }

@media (min-width: 768px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-wrap {
    -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-nowrap {
    -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-fill {
    -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important; }
  /* line 20, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-grow-0 {
    -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
            flex-grow: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-grow-1 {
    -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
            flex-grow: 1 !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-shrink-0 {
    -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-md-shrink-1 {
    -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-md-start {
    -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important; }
  /* line 26, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-md-end {
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important; }
  /* line 27, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-md-center {
    -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important; }
  /* line 28, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-md-between {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important; }
  /* line 29, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-md-around {
    -ms-flex-pack: distribute !important;
        justify-content: space-around !important; }
  /* line 31, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-md-start {
    -webkit-box-align: start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important; }
  /* line 32, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-md-end {
    -webkit-box-align: end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-md-center {
    -webkit-box-align: center !important;
        -ms-flex-align: center !important;
            align-items: center !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-md-baseline {
    -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important; }
  /* line 35, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-md-stretch {
    -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important; }
  /* line 37, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-md-start {
    -ms-flex-line-pack: start !important;
        align-content: flex-start !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-md-end {
    -ms-flex-line-pack: end !important;
        align-content: flex-end !important; }
  /* line 39, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-md-center {
    -ms-flex-line-pack: center !important;
        align-content: center !important; }
  /* line 40, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-md-between {
    -ms-flex-line-pack: justify !important;
        align-content: space-between !important; }
  /* line 41, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-md-around {
    -ms-flex-line-pack: distribute !important;
        align-content: space-around !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-md-stretch {
    -ms-flex-line-pack: stretch !important;
        align-content: stretch !important; }
  /* line 44, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-md-auto {
    -ms-flex-item-align: auto !important;
        align-self: auto !important; }
  /* line 45, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-md-start {
    -ms-flex-item-align: start !important;
        align-self: flex-start !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-md-end {
    -ms-flex-item-align: end !important;
        align-self: flex-end !important; }
  /* line 47, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-md-center {
    -ms-flex-item-align: center !important;
        align-self: center !important; }
  /* line 48, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-md-baseline {
    -ms-flex-item-align: baseline !important;
        align-self: baseline !important; }
  /* line 49, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-md-stretch {
    -ms-flex-item-align: stretch !important;
        align-self: stretch !important; } }

@media (min-width: 992px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-wrap {
    -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-nowrap {
    -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-fill {
    -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important; }
  /* line 20, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-grow-0 {
    -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
            flex-grow: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-grow-1 {
    -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
            flex-grow: 1 !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-shrink-0 {
    -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-lg-shrink-1 {
    -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-lg-start {
    -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important; }
  /* line 26, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-lg-end {
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important; }
  /* line 27, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-lg-center {
    -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important; }
  /* line 28, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-lg-between {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important; }
  /* line 29, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-lg-around {
    -ms-flex-pack: distribute !important;
        justify-content: space-around !important; }
  /* line 31, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-lg-start {
    -webkit-box-align: start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important; }
  /* line 32, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-lg-end {
    -webkit-box-align: end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-lg-center {
    -webkit-box-align: center !important;
        -ms-flex-align: center !important;
            align-items: center !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-lg-baseline {
    -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important; }
  /* line 35, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-lg-stretch {
    -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important; }
  /* line 37, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-lg-start {
    -ms-flex-line-pack: start !important;
        align-content: flex-start !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-lg-end {
    -ms-flex-line-pack: end !important;
        align-content: flex-end !important; }
  /* line 39, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-lg-center {
    -ms-flex-line-pack: center !important;
        align-content: center !important; }
  /* line 40, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-lg-between {
    -ms-flex-line-pack: justify !important;
        align-content: space-between !important; }
  /* line 41, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-lg-around {
    -ms-flex-line-pack: distribute !important;
        align-content: space-around !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-lg-stretch {
    -ms-flex-line-pack: stretch !important;
        align-content: stretch !important; }
  /* line 44, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-lg-auto {
    -ms-flex-item-align: auto !important;
        align-self: auto !important; }
  /* line 45, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-lg-start {
    -ms-flex-item-align: start !important;
        align-self: flex-start !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-lg-end {
    -ms-flex-item-align: end !important;
        align-self: flex-end !important; }
  /* line 47, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-lg-center {
    -ms-flex-item-align: center !important;
        align-self: center !important; }
  /* line 48, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-lg-baseline {
    -ms-flex-item-align: baseline !important;
        align-self: baseline !important; }
  /* line 49, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-lg-stretch {
    -ms-flex-item-align: stretch !important;
        align-self: stretch !important; } }

@media (min-width: 1200px) {
  /* line 11, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important; }
  /* line 14, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important; }
  /* line 16, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-wrap {
    -ms-flex-wrap: wrap !important;
        flex-wrap: wrap !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-nowrap {
    -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important; }
  /* line 18, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
        flex-wrap: wrap-reverse !important; }
  /* line 19, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-fill {
    -webkit-box-flex: 1 !important;
        -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important; }
  /* line 20, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-grow-0 {
    -webkit-box-flex: 0 !important;
        -ms-flex-positive: 0 !important;
            flex-grow: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-grow-1 {
    -webkit-box-flex: 1 !important;
        -ms-flex-positive: 1 !important;
            flex-grow: 1 !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-shrink-0 {
    -ms-flex-negative: 0 !important;
        flex-shrink: 0 !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_flex.scss */
  .flex-xl-shrink-1 {
    -ms-flex-negative: 1 !important;
        flex-shrink: 1 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-xl-start {
    -webkit-box-pack: start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important; }
  /* line 26, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-xl-end {
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important; }
  /* line 27, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-xl-center {
    -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important; }
  /* line 28, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-xl-between {
    -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important; }
  /* line 29, node_modules/bootstrap/scss/utilities/_flex.scss */
  .justify-content-xl-around {
    -ms-flex-pack: distribute !important;
        justify-content: space-around !important; }
  /* line 31, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-xl-start {
    -webkit-box-align: start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important; }
  /* line 32, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-xl-end {
    -webkit-box-align: end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-xl-center {
    -webkit-box-align: center !important;
        -ms-flex-align: center !important;
            align-items: center !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-xl-baseline {
    -webkit-box-align: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important; }
  /* line 35, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-items-xl-stretch {
    -webkit-box-align: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important; }
  /* line 37, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-xl-start {
    -ms-flex-line-pack: start !important;
        align-content: flex-start !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-xl-end {
    -ms-flex-line-pack: end !important;
        align-content: flex-end !important; }
  /* line 39, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-xl-center {
    -ms-flex-line-pack: center !important;
        align-content: center !important; }
  /* line 40, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-xl-between {
    -ms-flex-line-pack: justify !important;
        align-content: space-between !important; }
  /* line 41, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-xl-around {
    -ms-flex-line-pack: distribute !important;
        align-content: space-around !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-content-xl-stretch {
    -ms-flex-line-pack: stretch !important;
        align-content: stretch !important; }
  /* line 44, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-xl-auto {
    -ms-flex-item-align: auto !important;
        align-self: auto !important; }
  /* line 45, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-xl-start {
    -ms-flex-item-align: start !important;
        align-self: flex-start !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-xl-end {
    -ms-flex-item-align: end !important;
        align-self: flex-end !important; }
  /* line 47, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-xl-center {
    -ms-flex-item-align: center !important;
        align-self: center !important; }
  /* line 48, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-xl-baseline {
    -ms-flex-item-align: baseline !important;
        align-self: baseline !important; }
  /* line 49, node_modules/bootstrap/scss/utilities/_flex.scss */
  .align-self-xl-stretch {
    -ms-flex-item-align: stretch !important;
        align-self: stretch !important; } }

/* line 5, node_modules/bootstrap/scss/utilities/_float.scss */
.float-left {
  float: left !important; }

/* line 6, node_modules/bootstrap/scss/utilities/_float.scss */
.float-right {
  float: right !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_float.scss */
.float-none {
  float: none !important; }

@media (min-width: 576px) {
  /* line 5, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-sm-left {
    float: left !important; }
  /* line 6, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-sm-right {
    float: right !important; }
  /* line 7, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-sm-none {
    float: none !important; } }

@media (min-width: 768px) {
  /* line 5, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-md-left {
    float: left !important; }
  /* line 6, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-md-right {
    float: right !important; }
  /* line 7, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-md-none {
    float: none !important; } }

@media (min-width: 992px) {
  /* line 5, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-lg-left {
    float: left !important; }
  /* line 6, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-lg-right {
    float: right !important; }
  /* line 7, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-lg-none {
    float: none !important; } }

@media (min-width: 1200px) {
  /* line 5, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-xl-left {
    float: left !important; }
  /* line 6, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-xl-right {
    float: right !important; }
  /* line 7, node_modules/bootstrap/scss/utilities/_float.scss */
  .float-xl-none {
    float: none !important; } }

/* line 10, node_modules/bootstrap/scss/utilities/_position.scss */
.position-static {
  position: static !important; }

/* line 10, node_modules/bootstrap/scss/utilities/_position.scss */
.position-relative {
  position: relative !important; }

/* line 10, node_modules/bootstrap/scss/utilities/_position.scss */
.position-absolute {
  position: absolute !important; }

/* line 10, node_modules/bootstrap/scss/utilities/_position.scss */
.position-fixed {
  position: fixed !important; }

/* line 10, node_modules/bootstrap/scss/utilities/_position.scss */
.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important; }

/* line 15, node_modules/bootstrap/scss/utilities/_position.scss */
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030; }

/* line 23, node_modules/bootstrap/scss/utilities/_position.scss */
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030; }

@supports ((position: -webkit-sticky) or (position: sticky)) {
  /* line 31, node_modules/bootstrap/scss/utilities/_position.scss */
  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020; } }

/* line 5, node_modules/bootstrap/scss/utilities/_screenreaders.scss */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0; }

/* line 24, node_modules/bootstrap/scss/mixins/_screen-reader.scss */
.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal; }

/* line 3, node_modules/bootstrap/scss/utilities/_shadows.scss */
.shadow-sm {
  -webkit-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }

/* line 4, node_modules/bootstrap/scss/utilities/_shadows.scss */
.shadow {
  -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }

/* line 5, node_modules/bootstrap/scss/utilities/_shadows.scss */
.shadow-lg {
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }

/* line 6, node_modules/bootstrap/scss/utilities/_shadows.scss */
.shadow-none {
  -webkit-box-shadow: none !important;
          box-shadow: none !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.w-25 {
  width: 25% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.w-50 {
  width: 50% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.w-75 {
  width: 75% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.w-100 {
  width: 100% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.w-auto {
  width: auto !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.h-25 {
  height: 25% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.h-50 {
  height: 50% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.h-75 {
  height: 75% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.h-100 {
  height: 100% !important; }

/* line 7, node_modules/bootstrap/scss/utilities/_sizing.scss */
.h-auto {
  height: auto !important; }

/* line 11, node_modules/bootstrap/scss/utilities/_sizing.scss */
.mw-100 {
  max-width: 100% !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_sizing.scss */
.mh-100 {
  max-height: 100% !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-0 {
  margin: 0 !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-0,
.my-0 {
  margin-top: 0 !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-0,
.mx-0 {
  margin-right: 0 !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-0,
.my-0 {
  margin-bottom: 0 !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-0,
.mx-0 {
  margin-left: 0 !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-1 {
  margin: 0.25rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-1,
.my-1 {
  margin-top: 0.25rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-1,
.mx-1 {
  margin-right: 0.25rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-1,
.mx-1 {
  margin-left: 0.25rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-2 {
  margin: 0.5rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-2,
.my-2 {
  margin-top: 0.5rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-2,
.mx-2 {
  margin-right: 0.5rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-2,
.mx-2 {
  margin-left: 0.5rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-3 {
  margin: 1rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-3,
.my-3 {
  margin-top: 1rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-3,
.mx-3 {
  margin-right: 1rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-3,
.my-3 {
  margin-bottom: 1rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-3,
.mx-3 {
  margin-left: 1rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-4 {
  margin: 1.5rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-4,
.my-4 {
  margin-top: 1.5rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-4,
.mx-4 {
  margin-right: 1.5rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-4,
.mx-4 {
  margin-left: 1.5rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-5 {
  margin: 3rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-5,
.my-5 {
  margin-top: 3rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-5,
.mx-5 {
  margin-right: 3rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-5,
.my-5 {
  margin-bottom: 3rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-5,
.mx-5 {
  margin-left: 3rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-6 {
  margin: 6rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-6,
.my-6 {
  margin-top: 6rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-6,
.mx-6 {
  margin-right: 6rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-6,
.my-6 {
  margin-bottom: 6rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-6,
.mx-6 {
  margin-left: 6rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-7 {
  margin: 7rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-7,
.my-7 {
  margin-top: 7rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-7,
.mx-7 {
  margin-right: 7rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-7,
.my-7 {
  margin-bottom: 7rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-7,
.mx-7 {
  margin-left: 7rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-8 {
  margin: 8rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-8,
.my-8 {
  margin-top: 8rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-8,
.mx-8 {
  margin-right: 8rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-8,
.my-8 {
  margin-bottom: 8rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-8,
.mx-8 {
  margin-left: 8rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-9 {
  margin: 9rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-9,
.my-9 {
  margin-top: 9rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-9,
.mx-9 {
  margin-right: 9rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-9,
.my-9 {
  margin-bottom: 9rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-9,
.mx-9 {
  margin-left: 9rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-10 {
  margin: 10rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-10,
.my-10 {
  margin-top: 10rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-10,
.mx-10 {
  margin-right: 10rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-10,
.my-10 {
  margin-bottom: 10rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-10,
.mx-10 {
  margin-left: 10rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-0 {
  padding: 0 !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-0,
.py-0 {
  padding-top: 0 !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-0,
.px-0 {
  padding-right: 0 !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-0,
.py-0 {
  padding-bottom: 0 !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-0,
.px-0 {
  padding-left: 0 !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-1 {
  padding: 0.25rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-1,
.py-1 {
  padding-top: 0.25rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-1,
.px-1 {
  padding-right: 0.25rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-1,
.px-1 {
  padding-left: 0.25rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-2 {
  padding: 0.5rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-2,
.py-2 {
  padding-top: 0.5rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-2,
.px-2 {
  padding-right: 0.5rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-2,
.px-2 {
  padding-left: 0.5rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-3 {
  padding: 1rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-3,
.py-3 {
  padding-top: 1rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-3,
.px-3 {
  padding-right: 1rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-3,
.py-3 {
  padding-bottom: 1rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-3,
.px-3 {
  padding-left: 1rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-4 {
  padding: 1.5rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-4,
.py-4 {
  padding-top: 1.5rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-4,
.px-4 {
  padding-right: 1.5rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-4,
.px-4 {
  padding-left: 1.5rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-5 {
  padding: 3rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-5,
.py-5 {
  padding-top: 3rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-5,
.px-5 {
  padding-right: 3rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-5,
.py-5 {
  padding-bottom: 3rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-5,
.px-5 {
  padding-left: 3rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-6 {
  padding: 6rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-6,
.py-6 {
  padding-top: 6rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-6,
.px-6 {
  padding-right: 6rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-6,
.py-6 {
  padding-bottom: 6rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-6,
.px-6 {
  padding-left: 6rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-7 {
  padding: 7rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-7,
.py-7 {
  padding-top: 7rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-7,
.px-7 {
  padding-right: 7rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-7,
.py-7 {
  padding-bottom: 7rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-7,
.px-7 {
  padding-left: 7rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-8 {
  padding: 8rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-8,
.py-8 {
  padding-top: 8rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-8,
.px-8 {
  padding-right: 8rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-8,
.py-8 {
  padding-bottom: 8rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-8,
.px-8 {
  padding-left: 8rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-9 {
  padding: 9rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-9,
.py-9 {
  padding-top: 9rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-9,
.px-9 {
  padding-right: 9rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-9,
.py-9 {
  padding-bottom: 9rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-9,
.px-9 {
  padding-left: 9rem !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
.p-10 {
  padding: 10rem !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pt-10,
.py-10 {
  padding-top: 10rem !important; }

/* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pr-10,
.px-10 {
  padding-right: 10rem !important; }

/* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pb-10,
.py-10 {
  padding-bottom: 10rem !important; }

/* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
.pl-10,
.px-10 {
  padding-left: 10rem !important; }

/* line 33, node_modules/bootstrap/scss/utilities/_spacing.scss */
.m-auto {
  margin: auto !important; }

/* line 34, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mt-auto,
.my-auto {
  margin-top: auto !important; }

/* line 38, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mr-auto,
.mx-auto {
  margin-right: auto !important; }

/* line 42, node_modules/bootstrap/scss/utilities/_spacing.scss */
.mb-auto,
.my-auto {
  margin-bottom: auto !important; }

/* line 46, node_modules/bootstrap/scss/utilities/_spacing.scss */
.ml-auto,
.mx-auto {
  margin-left: auto !important; }

@media (min-width: 576px) {
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-0 {
    margin: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-1 {
    margin: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-2 {
    margin: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-3 {
    margin: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-4 {
    margin: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-5 {
    margin: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-6 {
    margin: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-6,
  .my-sm-6 {
    margin-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-6,
  .mx-sm-6 {
    margin-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-6,
  .my-sm-6 {
    margin-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-6,
  .mx-sm-6 {
    margin-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-7 {
    margin: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-7,
  .my-sm-7 {
    margin-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-7,
  .mx-sm-7 {
    margin-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-7,
  .my-sm-7 {
    margin-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-7,
  .mx-sm-7 {
    margin-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-8 {
    margin: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-8,
  .my-sm-8 {
    margin-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-8,
  .mx-sm-8 {
    margin-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-8,
  .my-sm-8 {
    margin-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-8,
  .mx-sm-8 {
    margin-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-9 {
    margin: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-9,
  .my-sm-9 {
    margin-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-9,
  .mx-sm-9 {
    margin-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-9,
  .my-sm-9 {
    margin-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-9,
  .mx-sm-9 {
    margin-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-10 {
    margin: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-10,
  .my-sm-10 {
    margin-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-10,
  .mx-sm-10 {
    margin-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-10,
  .my-sm-10 {
    margin-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-10,
  .mx-sm-10 {
    margin-left: 10rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-0 {
    padding: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-1 {
    padding: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-2 {
    padding: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-3 {
    padding: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-4 {
    padding: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-5 {
    padding: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-6 {
    padding: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-6,
  .py-sm-6 {
    padding-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-6,
  .px-sm-6 {
    padding-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-6,
  .py-sm-6 {
    padding-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-6,
  .px-sm-6 {
    padding-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-7 {
    padding: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-7,
  .py-sm-7 {
    padding-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-7,
  .px-sm-7 {
    padding-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-7,
  .py-sm-7 {
    padding-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-7,
  .px-sm-7 {
    padding-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-8 {
    padding: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-8,
  .py-sm-8 {
    padding-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-8,
  .px-sm-8 {
    padding-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-8,
  .py-sm-8 {
    padding-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-8,
  .px-sm-8 {
    padding-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-9 {
    padding: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-9,
  .py-sm-9 {
    padding-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-9,
  .px-sm-9 {
    padding-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-9,
  .py-sm-9 {
    padding-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-9,
  .px-sm-9 {
    padding-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-sm-10 {
    padding: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-sm-10,
  .py-sm-10 {
    padding-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-sm-10,
  .px-sm-10 {
    padding-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-sm-10,
  .py-sm-10 {
    padding-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-sm-10,
  .px-sm-10 {
    padding-left: 10rem !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-sm-auto {
    margin: auto !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important; } }

@media (min-width: 768px) {
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-0 {
    margin: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-1 {
    margin: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-2 {
    margin: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-3 {
    margin: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-4 {
    margin: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-5 {
    margin: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-6 {
    margin: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-6,
  .my-md-6 {
    margin-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-6,
  .mx-md-6 {
    margin-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-6,
  .my-md-6 {
    margin-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-6,
  .mx-md-6 {
    margin-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-7 {
    margin: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-7,
  .my-md-7 {
    margin-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-7,
  .mx-md-7 {
    margin-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-7,
  .my-md-7 {
    margin-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-7,
  .mx-md-7 {
    margin-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-8 {
    margin: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-8,
  .my-md-8 {
    margin-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-8,
  .mx-md-8 {
    margin-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-8,
  .my-md-8 {
    margin-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-8,
  .mx-md-8 {
    margin-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-9 {
    margin: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-9,
  .my-md-9 {
    margin-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-9,
  .mx-md-9 {
    margin-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-9,
  .my-md-9 {
    margin-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-9,
  .mx-md-9 {
    margin-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-10 {
    margin: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-10,
  .my-md-10 {
    margin-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-10,
  .mx-md-10 {
    margin-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-10,
  .my-md-10 {
    margin-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-10,
  .mx-md-10 {
    margin-left: 10rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-0 {
    padding: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-1 {
    padding: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-2 {
    padding: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-3 {
    padding: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-4 {
    padding: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-5 {
    padding: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-6 {
    padding: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-6,
  .py-md-6 {
    padding-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-6,
  .px-md-6 {
    padding-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-6,
  .py-md-6 {
    padding-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-6,
  .px-md-6 {
    padding-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-7 {
    padding: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-7,
  .py-md-7 {
    padding-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-7,
  .px-md-7 {
    padding-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-7,
  .py-md-7 {
    padding-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-7,
  .px-md-7 {
    padding-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-8 {
    padding: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-8,
  .py-md-8 {
    padding-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-8,
  .px-md-8 {
    padding-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-8,
  .py-md-8 {
    padding-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-8,
  .px-md-8 {
    padding-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-9 {
    padding: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-9,
  .py-md-9 {
    padding-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-9,
  .px-md-9 {
    padding-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-9,
  .py-md-9 {
    padding-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-9,
  .px-md-9 {
    padding-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-md-10 {
    padding: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-md-10,
  .py-md-10 {
    padding-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-md-10,
  .px-md-10 {
    padding-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-md-10,
  .py-md-10 {
    padding-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-md-10,
  .px-md-10 {
    padding-left: 10rem !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-md-auto {
    margin: auto !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important; } }

@media (min-width: 992px) {
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-0 {
    margin: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-1 {
    margin: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-2 {
    margin: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-3 {
    margin: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-4 {
    margin: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-5 {
    margin: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-6 {
    margin: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-6,
  .my-lg-6 {
    margin-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-6,
  .mx-lg-6 {
    margin-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-6,
  .my-lg-6 {
    margin-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-6,
  .mx-lg-6 {
    margin-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-7 {
    margin: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-7,
  .my-lg-7 {
    margin-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-7,
  .mx-lg-7 {
    margin-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-7,
  .my-lg-7 {
    margin-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-7,
  .mx-lg-7 {
    margin-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-8 {
    margin: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-8,
  .my-lg-8 {
    margin-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-8,
  .mx-lg-8 {
    margin-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-8,
  .my-lg-8 {
    margin-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-8,
  .mx-lg-8 {
    margin-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-9 {
    margin: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-9,
  .my-lg-9 {
    margin-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-9,
  .mx-lg-9 {
    margin-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-9,
  .my-lg-9 {
    margin-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-9,
  .mx-lg-9 {
    margin-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-10 {
    margin: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-10,
  .my-lg-10 {
    margin-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-10,
  .mx-lg-10 {
    margin-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-10,
  .my-lg-10 {
    margin-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-10,
  .mx-lg-10 {
    margin-left: 10rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-0 {
    padding: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-1 {
    padding: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-2 {
    padding: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-3 {
    padding: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-4 {
    padding: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-5 {
    padding: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-6 {
    padding: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-6,
  .py-lg-6 {
    padding-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-6,
  .px-lg-6 {
    padding-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-6,
  .py-lg-6 {
    padding-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-6,
  .px-lg-6 {
    padding-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-7 {
    padding: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-7,
  .py-lg-7 {
    padding-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-7,
  .px-lg-7 {
    padding-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-7,
  .py-lg-7 {
    padding-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-7,
  .px-lg-7 {
    padding-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-8 {
    padding: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-8,
  .py-lg-8 {
    padding-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-8,
  .px-lg-8 {
    padding-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-8,
  .py-lg-8 {
    padding-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-8,
  .px-lg-8 {
    padding-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-9 {
    padding: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-9,
  .py-lg-9 {
    padding-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-9,
  .px-lg-9 {
    padding-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-9,
  .py-lg-9 {
    padding-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-9,
  .px-lg-9 {
    padding-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-lg-10 {
    padding: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-lg-10,
  .py-lg-10 {
    padding-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-lg-10,
  .px-lg-10 {
    padding-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-lg-10,
  .py-lg-10 {
    padding-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-lg-10,
  .px-lg-10 {
    padding-left: 10rem !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-lg-auto {
    margin: auto !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important; } }

@media (min-width: 1200px) {
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-0 {
    margin: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-1 {
    margin: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-2 {
    margin: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-3 {
    margin: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-4 {
    margin: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-5 {
    margin: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-6 {
    margin: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-6,
  .my-xl-6 {
    margin-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-6,
  .mx-xl-6 {
    margin-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-6,
  .my-xl-6 {
    margin-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-6,
  .mx-xl-6 {
    margin-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-7 {
    margin: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-7,
  .my-xl-7 {
    margin-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-7,
  .mx-xl-7 {
    margin-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-7,
  .my-xl-7 {
    margin-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-7,
  .mx-xl-7 {
    margin-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-8 {
    margin: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-8,
  .my-xl-8 {
    margin-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-8,
  .mx-xl-8 {
    margin-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-8,
  .my-xl-8 {
    margin-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-8,
  .mx-xl-8 {
    margin-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-9 {
    margin: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-9,
  .my-xl-9 {
    margin-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-9,
  .mx-xl-9 {
    margin-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-9,
  .my-xl-9 {
    margin-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-9,
  .mx-xl-9 {
    margin-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-10 {
    margin: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-10,
  .my-xl-10 {
    margin-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-10,
  .mx-xl-10 {
    margin-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-10,
  .my-xl-10 {
    margin-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-10,
  .mx-xl-10 {
    margin-left: 10rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-0 {
    padding: 0 !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-1 {
    padding: 0.25rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-2 {
    padding: 0.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-3 {
    padding: 1rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-4 {
    padding: 1.5rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-5 {
    padding: 3rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-6 {
    padding: 6rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-6,
  .py-xl-6 {
    padding-top: 6rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-6,
  .px-xl-6 {
    padding-right: 6rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-6,
  .py-xl-6 {
    padding-bottom: 6rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-6,
  .px-xl-6 {
    padding-left: 6rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-7 {
    padding: 7rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-7,
  .py-xl-7 {
    padding-top: 7rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-7,
  .px-xl-7 {
    padding-right: 7rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-7,
  .py-xl-7 {
    padding-bottom: 7rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-7,
  .px-xl-7 {
    padding-left: 7rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-8 {
    padding: 8rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-8,
  .py-xl-8 {
    padding-top: 8rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-8,
  .px-xl-8 {
    padding-right: 8rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-8,
  .py-xl-8 {
    padding-bottom: 8rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-8,
  .px-xl-8 {
    padding-left: 8rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-9 {
    padding: 9rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-9,
  .py-xl-9 {
    padding-top: 9rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-9,
  .px-xl-9 {
    padding-right: 9rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-9,
  .py-xl-9 {
    padding-bottom: 9rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-9,
  .px-xl-9 {
    padding-left: 9rem !important; }
  /* line 12, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .p-xl-10 {
    padding: 10rem !important; }
  /* line 13, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pt-xl-10,
  .py-xl-10 {
    padding-top: 10rem !important; }
  /* line 17, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pr-xl-10,
  .px-xl-10 {
    padding-right: 10rem !important; }
  /* line 21, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pb-xl-10,
  .py-xl-10 {
    padding-bottom: 10rem !important; }
  /* line 25, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .pl-xl-10,
  .px-xl-10 {
    padding-left: 10rem !important; }
  /* line 33, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .m-xl-auto {
    margin: auto !important; }
  /* line 34, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important; }
  /* line 38, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important; }
  /* line 42, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important; }
  /* line 46, node_modules/bootstrap/scss/utilities/_spacing.scss */
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important; } }

/* line 7, node_modules/bootstrap/scss/utilities/_text.scss */
.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

/* line 11, node_modules/bootstrap/scss/utilities/_text.scss */
.text-justify {
  text-align: justify !important; }

/* line 12, node_modules/bootstrap/scss/utilities/_text.scss */
.text-nowrap {
  white-space: nowrap !important; }

/* line 13, node_modules/bootstrap/scss/utilities/_text.scss */
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

/* line 21, node_modules/bootstrap/scss/utilities/_text.scss */
.text-left {
  text-align: left !important; }

/* line 22, node_modules/bootstrap/scss/utilities/_text.scss */
.text-right {
  text-align: right !important; }

/* line 23, node_modules/bootstrap/scss/utilities/_text.scss */
.text-center {
  text-align: center !important; }

@media (min-width: 576px) {
  /* line 21, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-sm-left {
    text-align: left !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-sm-right {
    text-align: right !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-sm-center {
    text-align: center !important; } }

@media (min-width: 768px) {
  /* line 21, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-md-left {
    text-align: left !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-md-right {
    text-align: right !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-md-center {
    text-align: center !important; } }

@media (min-width: 992px) {
  /* line 21, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-lg-left {
    text-align: left !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-lg-right {
    text-align: right !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-lg-center {
    text-align: center !important; } }

@media (min-width: 1200px) {
  /* line 21, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-xl-left {
    text-align: left !important; }
  /* line 22, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-xl-right {
    text-align: right !important; }
  /* line 23, node_modules/bootstrap/scss/utilities/_text.scss */
  .text-xl-center {
    text-align: center !important; } }

/* line 29, node_modules/bootstrap/scss/utilities/_text.scss */
.text-lowercase {
  text-transform: lowercase !important; }

/* line 30, node_modules/bootstrap/scss/utilities/_text.scss */
.text-uppercase {
  text-transform: uppercase !important; }

/* line 31, node_modules/bootstrap/scss/utilities/_text.scss */
.text-capitalize {
  text-transform: capitalize !important; }

/* line 35, node_modules/bootstrap/scss/utilities/_text.scss */
.font-weight-light {
  font-weight: 300 !important; }

/* line 36, node_modules/bootstrap/scss/utilities/_text.scss */
.font-weight-normal {
  font-weight: 400 !important; }

/* line 37, node_modules/bootstrap/scss/utilities/_text.scss */
.font-weight-bold {
  font-weight: 700 !important; }

/* line 38, node_modules/bootstrap/scss/utilities/_text.scss */
.font-italic {
  font-style: italic !important; }

/* line 42, node_modules/bootstrap/scss/utilities/_text.scss */
.text-white {
  color: #fff !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-primary {
  color: #bd081c !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-primary:hover, a.text-primary:focus {
  color: #8c0615 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-secondary {
  color: #6c757d !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-secondary:hover, a.text-secondary:focus {
  color: #545b62 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-success {
  color: #24b47e !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-success:hover, a.text-success:focus {
  color: #1c8a60 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-info {
  color: #46f8ff !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-info:hover, a.text-info:focus {
  color: #13f6ff !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-warning {
  color: #ffc107 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-warning:hover, a.text-warning:focus {
  color: #d39e00 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-danger {
  color: #bd081c !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-danger:hover, a.text-danger:focus {
  color: #8c0615 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-light {
  color: #fff !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-light:hover, a.text-light:focus {
  color: #e6e6e6 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-dark {
  color: #343a40 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-dark:hover, a.text-dark:focus {
  color: #1d2124 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-purple {
  color: #6f42c1 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-purple:hover, a.text-purple:focus {
  color: #59339d !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-purplepink {
  color: #9742c1 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-purplepink:hover, a.text-purplepink:focus {
  color: #7a339d !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-indigo {
  color: #6610f2 !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-indigo:hover, a.text-indigo:focus {
  color: #510bc4 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-pink {
  color: #e83e8c !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-pink:hover, a.text-pink:focus {
  color: #d91a72 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-cyan {
  color: #46f8ff !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-cyan:hover, a.text-cyan:focus {
  color: #13f6ff !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-lightgreen {
  color: #7eec9d !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-lightgreen:hover, a.text-lightgreen:focus {
  color: #52e57b !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-graylight {
  color: #f8f9fa !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-graylight:hover, a.text-graylight:focus {
  color: #dae0e5 !important; }

/* line 6, node_modules/bootstrap/scss/mixins/_text-emphasis.scss */
.text-gray200 {
  color: #eee !important; }

/* line 17, node_modules/bootstrap/scss/mixins/_hover.scss */
a.text-gray200:hover, a.text-gray200:focus {
  color: #d5d5d5 !important; }

/* line 48, node_modules/bootstrap/scss/utilities/_text.scss */
.text-body {
  color: #343a40 !important; }

/* line 49, node_modules/bootstrap/scss/utilities/_text.scss */
.text-muted {
  color: #adb5bd !important; }

/* line 51, node_modules/bootstrap/scss/utilities/_text.scss */
.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important; }

/* line 52, node_modules/bootstrap/scss/utilities/_text.scss */
.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important; }

/* line 56, node_modules/bootstrap/scss/utilities/_text.scss */
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0; }

/* line 5, node_modules/bootstrap/scss/utilities/_visibility.scss */
.visible {
  visibility: visible !important; }

/* line 9, node_modules/bootstrap/scss/utilities/_visibility.scss */
.invisible {
  visibility: hidden !important; }

@media print {
  /* line 13, node_modules/bootstrap/scss/_print.scss */
  *,
  *::before,
  *::after {
    text-shadow: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important; }
  /* line 24, node_modules/bootstrap/scss/_print.scss */
  a:not(.btn) {
    text-decoration: underline; }
  /* line 34, node_modules/bootstrap/scss/_print.scss */
  abbr[title]::after {
    content: " (" attr(title) ")"; }
  /* line 49, node_modules/bootstrap/scss/_print.scss */
  pre {
    white-space: pre-wrap !important; }
  /* line 52, node_modules/bootstrap/scss/_print.scss */
  pre,
  blockquote {
    border: 1px solid #adb5bd;
    page-break-inside: avoid; }
  /* line 63, node_modules/bootstrap/scss/_print.scss */
  thead {
    display: table-header-group; }
  /* line 67, node_modules/bootstrap/scss/_print.scss */
  tr,
  img {
    page-break-inside: avoid; }
  /* line 72, node_modules/bootstrap/scss/_print.scss */
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3; }
  /* line 79, node_modules/bootstrap/scss/_print.scss */
  h2,
  h3 {
    page-break-after: avoid; }
  @page {
    size: a3; }
  /* line 92, node_modules/bootstrap/scss/_print.scss */
  body {
    min-width: 992px !important; }
  /* line 95, node_modules/bootstrap/scss/_print.scss */
  .container {
    min-width: 992px !important; }
  /* line 100, node_modules/bootstrap/scss/_print.scss */
  .navbar {
    display: none; }
  /* line 103, node_modules/bootstrap/scss/_print.scss */
  .badge {
    border: 1px solid #000; }
  /* line 107, node_modules/bootstrap/scss/_print.scss */
  .table {
    border-collapse: collapse !important; }
    /* line 110, node_modules/bootstrap/scss/_print.scss */
    .table td,
    .table th {
      background-color: #fff !important; }
  /* line 117, node_modules/bootstrap/scss/_print.scss */
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6 !important; }
  /* line 123, node_modules/bootstrap/scss/_print.scss */
  .table-dark {
    color: inherit; }
    /* line 126, node_modules/bootstrap/scss/_print.scss */
    .table-dark th,
    .table-dark td,
    .table-dark thead th,
    .table-dark tbody + tbody {
      border-color: #dee2e6; }
  /* line 134, node_modules/bootstrap/scss/_print.scss */
  .table .thead-dark th {
    color: inherit;
    border-color: #dee2e6; } }
