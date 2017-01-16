<!-- Scripts -->
<!-- build:js build/js/main.js -->
{{ js('js/public') }}
{{ js('js/localstorage') }}
{{ js('js/toc') }}
{{ js('js/mobile_nav') }}
{{ js('js/ui') }}
<!-- endbuild -->
{% if page.layout === 'plugins' %}
<!-- build:js build/js/plugins.js -->
{{ js('js/plugins') }}
<!-- endbuild -->
{% endif %}
{# {{ partial('gtm') }} #}
<!-- Algolia -->
