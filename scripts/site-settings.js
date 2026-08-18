const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

hexo.extend.filter.register('before_generate', function () {
  const settingsPath = path.join(hexo.base_dir, 'source', '_data', 'site-settings.yml');
  if (!fs.existsSync(settingsPath)) return;

  const settings = yaml.load(fs.readFileSync(settingsPath, 'utf8')) || {};

  if (settings.site_title) hexo.config.title = settings.site_title;
  if (settings.subtitle) hexo.config.subtitle = settings.subtitle;
  if (settings.description) hexo.config.description = settings.description;
  if (settings.author) hexo.config.author = settings.author;

  if (hexo.theme && hexo.theme.config) {
    const next = hexo.theme.config;
    next.avatar = next.avatar || {};
    if (settings.avatar) next.avatar.url = settings.avatar;

    next.social = next.social || {};
    if (settings.github) next.social.GitHub = `${settings.github} || fab fa-github`;
    if (settings.email) next.social['E-Mail'] = `mailto:${settings.email} || fa fa-envelope`;
  }
});
