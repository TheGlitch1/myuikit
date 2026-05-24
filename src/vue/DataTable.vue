<script setup lang="ts">
interface TableColumn {
  key: string
  label: string
  width?: string
}

type TableRow = Record<string, unknown> & { _section?: boolean; _sectionLabel?: string }

defineProps<{
  columns?: TableColumn[]
  rows?: TableRow[]
}>()
</script>

<template>
  <table class="data-table">
    <thead>
      <tr>
        <th
          v-for="col in columns"
          :key="col.key"
          :style="col.width ? { width: col.width } : undefined"
        >{{ col.label }}</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="rows && rows.length">
        <template v-for="(row, i) in rows" :key="i">
          <tr v-if="row._section" class="data-table__section-header">
            <td :colspan="columns?.length ?? 1">{{ row._sectionLabel }}</td>
          </tr>
          <tr v-else>
            <td v-for="col in columns" :key="col.key">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
        </template>
      </template>
      <tr v-else>
        <td :colspan="columns?.length ?? 1">
          <slot name="empty">No data</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
