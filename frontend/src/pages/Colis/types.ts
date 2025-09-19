// frontend/src/pages/Colis/types.ts
// frontend/src/pages/Colis/types.ts
export interface Colis {
    id_colis: number;
css_raw_color_code?: string | null;
date_persistence?: string | null;
updated_version_date?: string | null;
collecte: boolean;
date_enlevement?: string | null;
date_envoi?: string | null;
id_delai_envoi?: number | null;
id_codevalidation?: number | null;
id_destinataire?: number | null;
id_expediteur?: number | null;
id_facture?: number | null;
id_livreur?: number | null;
id_statut_colis?: number | null;
id_type_physique?: number | null;
}
