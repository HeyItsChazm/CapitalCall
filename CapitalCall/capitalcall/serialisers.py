from rest_framework import serializers
from .models import Fund, Call, Commitment, FundInvestment


class FundSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Fund
        fields = ('id', 'name')


class CallSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Call
        fields = ('id', 'date', 'investment_name', 'capital_requirement')


class CommitmentSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Commitment
        fields = ('id', 'fund_id', 'date', 'amount')


class FundInvestmentSerialiser(serializers.ModelSerializer):
    class Meta:
        model = FundInvestment
        fields = ('id', 'call_id', 'commitment_id', 'fund_id', 'investment_amount', 'investment_amount_currency')
