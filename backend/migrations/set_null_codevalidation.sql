-- ############################
-- Appliquer les migrations
--############################


-- Connecte-toi à PostgreSQL :
--             psql postgresql://root:root1A%40@localhost:5432/gestocol

-- Exécute le fichier SQL :

--            \i 'C:/Users/mashk/IdeaProjects/Gestocol/backend/migrations/set_null_codevalidation.sql'

-- en remote :
--             copier le SQL et l'exécuter

-- Vérifie la contrainte :

--              SELECT conname, confdeltype FROM pg_constraint WHERE conname = 'fklspy82jgju08bys2awstl98eu';


ALTER TABLE colis
DROP CONSTRAINT IF EXISTS fklspy82jgju08bys2awstl98eu;

ALTER TABLE colis
ADD CONSTRAINT fklspy82jgju08bys2awstl98eu
FOREIGN KEY (id_codevalidation) REFERENCES codevalidation(id_codevalidation)
ON DELETE SET NULL;


-- la base de données refuse l’insertion à cause de la colonne css_raw_color_code qui est NOT NULL
-- penser donc au besoin à supprimer cette contrainte !!!!
ALTER TABLE codevalidation ALTER COLUMN css_raw_color_code DROP NOT NULL;

ALTER TABLE colis ALTER COLUMN css_raw_color_code DROP NOT NULL;

ALTER TABLE type_physique ALTER COLUMN css_raw_color_code DROP NOT NULL;

