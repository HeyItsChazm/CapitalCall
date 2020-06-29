from djmoney.models.fields import MoneyField
from django.db import models
from django.utils import timezone

# Pseudo-currency type, 19 digits with 4 decimal place accuracy.
# Currently, exchange rates are not implemented and therefore all transactions should be conducted in the same currency.
money_field_settings = {
    'max_digits': 19,
    'decimal_places': 4,
    'default_currency': 'USD',
    'null': False,
}


# Fund model
class Fund(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=120)

    def __str__(self):
        return f"{self.name}"


# Call model
class Call(models.Model):
    id = models.BigAutoField(primary_key=True)
    date = models.DateField(default=timezone.now)
    investment_name = models.CharField(max_length=120)
    capital_requirement = MoneyField(**money_field_settings)

    def __str__(self):
        return f"Call #{self.id}"


# Commitment model
class Commitment(models.Model):
    id = models.BigAutoField(primary_key=True)
    # Link the commitment to a look up on Fund model id.
    fund_id = models.ForeignKey('Fund', on_delete=models.PROTECT)
    date = models.DateField(default=timezone.now)
    amount = MoneyField(**money_field_settings)

    def __str__(self):
        return f"Commitment #{self.id}"


# Fund Investment model
class FundInvestment(models.Model):
    id = models.BigAutoField(primary_key=True)
    # Link the fund investment to a look up on Call model id.
    call_id = models.ForeignKey('Call', on_delete=models.PROTECT)
    # Link the fund investment to a look up on Commitment model id.
    commitment_id = models.ForeignKey('Commitment', on_delete=models.PROTECT)
    # Link the fund investment to a look up on Fund model id.
    fund_id = models.ForeignKey('Fund', on_delete=models.PROTECT)
    investment_amount = MoneyField(**money_field_settings)

    def __str__(self):
        return f"Fund Investment #{self.id}"
