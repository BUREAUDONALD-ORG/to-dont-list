import CMS from 'netlify-cms';
import {
  CustomPathImageControl,
  CustomPathImagePreview
} from './customPathImage.js';

CMS.registerPreviewStyle('/styles.css');

CMS.registerWidget(
  'custompathimage',
  CustomPathImageControl,
  CustomPathImagePreview
);
