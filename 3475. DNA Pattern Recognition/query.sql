# Write your MySQL query statement below

SELECT s.sample_id, s.dna_sequence, s.species, 
IF(s.dna_sequence LIKE 'ATG%', 1, 0) AS has_start,
IF(s.dna_sequence LIKE '%TAA' OR s.dna_sequence LIKE '%TAG' OR s.dna_sequence LIKE '%TGA', 1, 0) AS has_stop,
IF(s.dna_sequence LIKE '%ATAT%', 1, 0) AS has_atat,
IF(s.dna_sequence LIKE '%GGG%', 1, 0) AS has_ggg
FROM Samples AS s
ORDER BY s.sample_id ASC;