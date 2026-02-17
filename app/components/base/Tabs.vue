<template>
	<UTabs
		variant="link"
		color="primary"
		size="sm"
		v-bind="$attrs"
	>
		<template v-for="(_, name) in $slots" #[name]="slotData">
			<slot :name="name" v-bind="slotData ?? {}" />
		</template>
	</UTabs>
</template>
