from django.contrib import admin
from .models import Fund, Call, Commitment, FundInvestment


class FundAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


class CallAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'investment_name', 'capital_requirement')


class CommitmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'fund_id', 'date', 'amount')


class FundInvestmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'call_id', 'commitment_id', 'fund_id', 'investment_amount')


admin.site.register(Fund, FundAdmin)
admin.site.register(Call, CallAdmin)
admin.site.register(Commitment, CommitmentAdmin)
admin.site.register(FundInvestment, FundInvestmentAdmin)
