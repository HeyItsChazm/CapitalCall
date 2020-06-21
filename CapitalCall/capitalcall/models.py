import datetime

from djmoney.models.fields import MoneyField
from django.db import models
from django.utils import timezone


money_field_settings = {
    'max_digits': 19,
    'decimal_places': 4,
    'default_currency': 'USD',
    'null': False,
}


class Fund(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=120)

    def __str__(self):
        return f"{self.name}"


class Call(models.Model):
    id = models.BigAutoField(primary_key=True)
    call_id = models.PositiveIntegerField()
    date = models.DateField(default=timezone.now)
    investment_name = models.CharField(max_length=120)
    capital_requirement = MoneyField(**money_field_settings)

    def __str__(self):
        return f"Call #{self.id}"


class Commitment(models.Model):
    id = models.BigAutoField(primary_key=True)
    fund_id = models.ForeignKey('Fund', on_delete=models.PROTECT)
    date = models.DateField(default=timezone.now)
    amount = MoneyField(**money_field_settings)

    def __str__(self):
        return f"Commitment #{self.id}"


class FundInvestment(models.Model):
    id = models.BigAutoField(primary_key=True)
    call_id = models.ForeignKey('Call', on_delete=models.PROTECT)
    commitment_id = models.ForeignKey('Commitment', on_delete=models.PROTECT)
    fund_id = models.ForeignKey('Fund', on_delete=models.PROTECT)
    investment_amount = MoneyField(**money_field_settings)

    def __str__(self):
        return f"Fund Investment #{self.id}"
