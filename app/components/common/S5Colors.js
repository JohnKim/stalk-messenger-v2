/*
 * @flow
 */

'use strict';

const COLORS = {
  'PRIMARY_TEXT': '#1994b9',
  'SECONDARY_TEXT': '#FFFFFF',
  'DISABLE_TEXT': 'rgba(255, 255, 255, 0.38)',
  'PRIMARY': '#2eb8e6',
  'PRIMARY_DARK': '#0091ba',
  'ACCENT': '#FF3F80',
  'BACKGROUND': '#FFFFFF',
  'BACKGROUND_DARK': '#f5f5f5',
  'CORAL_PINK':'#ff535f'
};

function colorForProfile(str, count = 1) {

  let index = str.charCodeAt(0);
  if(!index) {
    console.warn(' ##TODO## S5Color.colorForProfile - input is not existed! ');
    return COLORS.PRIMARY;
  }

  const hue = Math.round(460 * index / (count+10));
  return `hsl(${hue}, 74%, 65%)`;
}

module.exports = {
  primaryText: COLORS.PRIMARY_TEXT,
  secondaryText: COLORS.SECONDARY_TEXT,
  disableText: COLORS.DISABLE_TEXT,
  primary: COLORS.PRIMARY,
  primaryDark: COLORS.PRIMARY_DARK,
  accent: COLORS.ACCENT,
  background: COLORS.BACKGROUND,
  backgroundDark: COLORS.BACKGROUND_DARK,
  colorForProfile,
  coralPink:COLORS.CORAL_PINK
};
