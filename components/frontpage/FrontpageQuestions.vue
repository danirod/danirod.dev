<script setup>
const KEYS = [
  "cost",
  "rate",
  "agreement",
  "existing",
  "contractor",
  "maintenance",
];
</script>

<template>
  <FrontpageBlock
    id="questions"
    class="text-copy"
    :title="$t('frontpage_blocks.questions.title')"
  >
    <QuestionItem>
      <QuestionTitle>{{
        $t("frontpage_blocks.questions.cost.title")
      }}</QuestionTitle>
      <p>{{ $t("frontpage_blocks.questions.cost.p1") }}</p>
      <p>{{ $t("frontpage_blocks.questions.cost.p2") }}</p>
      <p>{{ $t("frontpage_blocks.questions.cost.p3") }}</p>
    </QuestionItem>

    <QuestionItem>
      <QuestionTitle>{{
        $t("frontpage_blocks.questions.rate.title")
      }}</QuestionTitle>
      <p>{{ $t("frontpage_blocks.questions.rate.p1") }}</p>
      <p>{{ $t("frontpage_blocks.questions.rate.p2") }}</p>
      <p>{{ $t("frontpage_blocks.questions.rate.p3") }}</p>
    </QuestionItem>

    <QuestionItem>
      <QuestionTitle>{{
        $t("frontpage_blocks.questions.agreement.title")
      }}</QuestionTitle>
      <p>{{ $t("frontpage_blocks.questions.agreement.p1") }}</p>
      <p>{{ $t("frontpage_blocks.questions.agreement.p2") }}</p>
      <p>{{ $t("frontpage_blocks.questions.agreement.p3") }}</p>
    </QuestionItem>

    <QuestionItem>
      <QuestionTitle>{{
        $t("frontpage_blocks.questions.existing.title")
      }}</QuestionTitle>
      <p>{{ $t("frontpage_blocks.questions.existing.p1") }}</p>
      <p>{{ $t("frontpage_blocks.questions.existing.p2") }}</p>
    </QuestionItem>

    <QuestionItem>
      <QuestionTitle>{{
        $t("frontpage_blocks.questions.contractor.title")
      }}</QuestionTitle>
      <p>{{ $t("frontpage_blocks.questions.contractor.p1") }}</p>
      <p>{{ $t("frontpage_blocks.questions.contractor.p2") }}</p>
      <p>{{ $t("frontpage_blocks.questions.contractor.p3") }}</p>
    </QuestionItem>

    <QuestionItem>
      <QuestionTitle>{{
        $t("frontpage_blocks.questions.maintenance.title")
      }}</QuestionTitle>
      <p>{{ $t("frontpage_blocks.questions.maintenance.p1") }}</p>
      <p>{{ $t("frontpage_blocks.questions.maintenance.p2") }}</p>
    </QuestionItem>
  </FrontpageBlock>
</template>
