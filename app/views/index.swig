{% extends 'layout.swig' %}

{% block content %}
  <div class="container">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">{{data.base}}</h1>
      <p class="lead">Datos sobre criptomoneda brindados por <b>Coinbase</b> para la compra.</p>
    </div>
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">{{data.currency}}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">{% if data.currency == "USD" %}${% elif data.currency == "EUR" %}€{% endif %} {{data.amount}}</h1>
        </div>
      </div>
    </div>
  </div>
{% endblock %}
