export type CategoryType = {
  dataset: string;
  title: string;
  subtitle?: string;
  color: string;
};

export type DatasetsType = {
  [key: string]: DatasetType[];
};

export type DatasetType = {
  title: string;
  subtitle: string;
  rules: RuleType[];
};

export type RuleType = {
  title: string;
  subtitle: string;
  icon: string;
  reference: string;
  description: string;
};