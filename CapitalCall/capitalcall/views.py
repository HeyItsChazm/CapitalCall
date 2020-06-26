from rest_framework import viewsets
from .serialisers import FundSerialiser, CallSerialiser, CommitmentSerialiser, FundInvestmentSerialiser
from .models import Fund, Call, Commitment, FundInvestment


class FundView(viewsets.ModelViewSet):
    serializer_class = FundSerialiser
    queryset = Fund.objects.all()


class CallView(viewsets.ModelViewSet):
    serializer_class = CallSerialiser
    queryset = Call.objects.all()


class CommitmentView(viewsets.ModelViewSet):
    serializer_class = CommitmentSerialiser
    queryset = Commitment.objects.all()


class FundInvestmentView(viewsets.ModelViewSet):
    serializer_class = FundInvestmentSerialiser
    queryset = FundInvestment.objects.all()
